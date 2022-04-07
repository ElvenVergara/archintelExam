<template>

 <div>
    
	<div class="card m-2">
	  <div class="card-body p-0">

	  		<div class="p-3 row w-100">
	              
	          <div class="col">
			  	<p>
				  	<b>Walbro - All Media</b><br>
				  	<span style="font-size:13px;color:gray;">This table shows recently researched articles for Walbro</span> 
			  	</p>
	          </div>
			 
			  <div class="col" style="text-align: right;">
			  	<a href="#" style="text-decoration: none;">
			    	<b>VIEW OLDER ARTICLES</b>
			  	</a>
			  </div>
			  

			</div>



			<v-card>
			    <v-card-title>

			      <v-btn
                    color="primary"
                    dark
                  >
                	EXPORT
                  </v-btn>

			      <v-spacer></v-spacer>

			      <v-text-field
			        v-model="search"
			        append-icon="mdi-magnify"
			        label="Search"
			        outlined
			        hide-details
			        dense
			        style="width:40px;"
			      ></v-text-field>

			      <v-text-field
			      	class="mx-2"
			        v-model="startDate"
			        label="Filter Date Start"
			        outlined
			        hide-details
			        dense
			        type="date"
			        style="width:30px;"
			      ></v-text-field>


			      <v-text-field
			        v-model="endDate"
			        label="Filter Date End"
			        outlined
			        hide-details
			        dense
			        type="date"
			        style="width:30px;"
			      ></v-text-field>



			    </v-card-title>


			    <v-tabs>
				    <v-tab>ALL &nbsp;<v-chip color="primary" small>1000</v-chip></v-tab>
				    <v-tab>CUSTOMERS &nbsp;<v-chip color="primary" small>221</v-chip></v-tab>
				    <v-tab>COMPETITORS &nbsp;<v-chip color="primary" small>78</v-chip></v-tab>
				    <v-tab>PRODUCTS &nbsp;<v-chip color="primary" small>171</v-chip></v-tab>
				</v-tabs>

			    <v-data-table
			      :headers="headers"
			      :items="filterItem"
			      :search="search"
			      style="width:100%;overflow-x: auto;"
			      class="border"
			    >
			    	<template #item.actions="{item}">
			    		<v-btn icon title="Edit Data" class="text-success">
	                      <v-icon>mdi-file-document-edit</v-icon>
	                    </v-btn>

	                    <v-btn icon title="Upload" class="text-primary">
	                      <v-icon>mdi-apple-icloud</v-icon>
	                    </v-btn>
			    	</template>


			    	<template #item.forediting="{item}">
			    		<v-checkbox
				          :v-model="item.published"
				          hide-details
				          class="shrink m-0"
				        ></v-checkbox>
			    	</template>



			    	<template #item.published="{item}">
			    		<v-checkbox
				          :v-model="item.published"
				          hide-details
				          class="shrink m-0"
				        ></v-checkbox>
			    	</template>


			    	<template #item.title="{item}">
			    	<a href="#">{{item.title}}</a>
			    	</template>


			    	<template #item.rating="{item}">
			    		<v-rating
						  empty-icon="mdi-star-outline"
						  full-icon="mdi-star"
						  half-icon="mdi-star-half-full"
						  length="5"
						  size="20"
						  background-color="orange lighten-3"
      					  color="orange"
						  :value="item.rating"
						></v-rating>
			    	</template>

			    </v-data-table>


			</v-card>


	  </div>
	</div>

</div>


</template>







<script>
  export default {
    data () {
      return {
      	includeFiles:'',
        search: '',
        startDate:null,
    	endDate:null,
        headers: [
          { text: 'Actions', value: 'actions' },
          { text: 'Media Date', value: 'mediadate' },
          { text: 'Created Date & Time', value: 'date' },
          { text: 'For Editing', value: 'forediting' },
          { text: 'Published', value: 'published' },
          { text: 'Category', value: 'category' },
          { text: 'Title', value: 'title' },
          { text: 'Researcher', value: 'researcher' },
          { text: 'Writer', value: 'writer' },
          { text: 'Editor', value: 'editor' },
          { text: 'Rating', value: 'rating' },
        ],


        articles: [
          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2021',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 1,
          },    

          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2021',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 3,
          },          


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2023',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 4,
          },    


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2022',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 5,
          },    


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2021',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 3,
          },    


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2023',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 2,
          },    


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2023',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 3,
          },    


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2021',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 5,
          },    


          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2021',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 2,
          },    

          {
            actions: 'Frozen Yogurt',
            mediadate: 'October 12, 2021',
            date: 'Oct 8, 2021 2:07 PM',
            forediting: 24,
            published: '',
            category: 'Customers',
            title: 'Review: 2021 Honda Gold Wing DCT a Good Long-Distance Tourer',
            researcher: 'Lim Datahan',
            writer: 'Spencer Macabudbud',
            editor: 'Rosellers Bojosers',
            rating: 1,
          },    
        ],
      }
    },

    computed: {
    	
      filterItem() {

        let startDate = this.localizeDate(this.startDate);
        let endDate = this.localizeDate(this.endDate);

        
        const items = this.articles;

        return items
          .filter(item => {
            const itemDate = new Date(item.mediadate)
            if (startDate && endDate) {
              return startDate <= itemDate && itemDate <= endDate;
            }
            if (startDate && !endDate) {
              return startDate <= itemDate;
            }
            if (!startDate && endDate) {
              return itemDate <= endDate;
            }
            return true;
          })
      }
  	},



  	methods: {
	    localizeDate(date) {
	      // Date picker uses ISO format (yyyy-mm-dd), which is UTC. The data
	      // contains locale specific date strings (mm/dd/yyyy), which `Date`
	      // parses with local time-zone offset instead of UTC. Normalize the
	      // ISO date so we're comparing local times.
	      if (!date || !date.includes('-')) return date
	      const [yyyy, mm, dd] = date.split('-')

	      return new Date(`${mm}/${dd}/${yyyy}`)

	    },
	    formatDate(date) {
	      return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))
	    }
	}



  }
</script>