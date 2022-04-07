<template>
	
	<div id="sidebar-nav">

	    <p href="#" class="d-inline-block text-truncate m-2">
	       <span>Writer Chassis</span>
	    </p>

	  
	    <div class="dropdown">

	      <button class="btn dropdown-toggle w-100 text-white" type="button" id="bellDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" style="background-color: rgb(0,105,92);border:solid gray 1px;" >
	          
	          <div class="row">
	              
	               <div class="col-2 text-center p-1">
	                  <img class="rounded-circle border border-primary" src="@/assets/images/user.png" style="width:40px;">
	               </div> 
	               <div class="col-8 text-start text-wrap">
	                 <b>Elven Vergara</b> <br>
	                 <span style="font-size:13px;">Web Developer</span>
	               </div> 
	               <div class="col-2 text-end">
	                 <v-btn icon dark title="Edit Data" class="text-white">
                      <v-icon>mdi-chevron-down</v-icon>
                     </v-btn>
	               </div> 

	          </div>

	      </button>

	      <ul class="dropdown-menu p-0 m-0" aria-labelledby="bellDropdown" style="width:251px;">

	      	<p href="#" class="d-inline-block text-truncate m-2">
		       <span>Chassis</span>
		    </p>	

	        <li>
	        	<button class="dropdown-item" type="button">
		        	  <v-btn icon color="info">
		                <v-icon>mdi-magnify</v-icon>
		              </v-btn>
                	  &nbsp;<b>Research</b>
                </button>
            </li>

	        <li>
	        	<button class="dropdown-item" type="button">
		        	  <v-btn icon color="success">
		                <v-icon>mdi-pencil</v-icon>
		              </v-btn>
                	  &nbsp;<b>Writer</b>
                </button>
	       	</li>


	       	<li>
	        	<button class="dropdown-item" type="button">
		        	  <v-btn icon color="primary">
		                <v-icon>mdi-newspaper-variant</v-icon>
		              </v-btn>
                	  &nbsp;<b>Editor</b>
                </button>
	       	</li>




	       	<p href="#" class="d-inline-block text-truncate m-2">
		       <span>Other Options</span>
		    </p>	

	        <li>
	        	<button class="dropdown-item" type="button">
                	  <b>Update Profile</b>
                </button>
            </li>

	        <li>
	        	<button class="dropdown-item text-danger" type="button">
                	  <b>Exit Chassis</b>
                </button>
	       	</li>


	      </ul>

	    </div>


	    <p class="text-truncate m-0 p-2 text-center" style="border:solid gray 1px;">
	       <span>Walbro</span>
	    </p>


	    <div style="height:67vh;background-color: rgb(0,77,64);">

	    	
	        <ul class="nav nav-pills flex-column m-0 p-0">
	          <li id="links">
	            <a id="link1" class="nav-link active" @click="changePage('')" aria-current="page">
	              <b>Dashboard</b>
	            </a>
	          </li>
	          <li id="links">
	            <a @click="changePage('allmedia')" id="link2" class="nav-link text-white">
	              <b>All Media</b>
	            </a>
	          </li>
	          <li id="links">
	            <a @click="changePage('accountsettings')" id="link3" class="nav-link text-white">
	              <b>Account Settings</b>
	            </a>
	          </li>
	        </ul>


	    </div>

	    <p class="text-truncate m-0 p-2 text-start" style="border:solid gray 1px;font-size:10px;">
	       <b><span>Salesforce Home</span><br>
	       <span>v.4.4.0 | &copy; 2021 ArchIntel Corp.</span></b>
	    </p>

	</div>

</template>







<script type="text/javascript">


  export default {

      data(){

          return{

      

          }

      },


      //mounted
      //
      //

            async mounted(){

               let page = this.$router.history.current.path.replace('/', "");

               document.getElementById("link1").className = 'nav-link text-white';
	  		   document.getElementById("link2").className = 'nav-link text-white';
	  		   document.getElementById("link3").className = 'nav-link text-white';
	  		   
               if (page == '') {
	  		   		document.getElementById("link1").className = 'nav-link active';
	           } else if (page == 'allmedia') {
	  		   		document.getElementById("link2").className = 'nav-link active';
	           } else if (page == 'accountsettings') {
	  		   		document.getElementById("link3").className = 'nav-link active';
	           }
              
            },

      //
      //
      //mounted
      


    // Methods
    // 
    // 
      
      methods:{

        changePage(page){

           this.$router.push('/'+page);

  		   document.getElementById("link1").className = 'nav-link text-white';
  		   document.getElementById("link2").className = 'nav-link text-white';
  		   document.getElementById("link3").className = 'nav-link text-white';

           if (page == '') {
  		   		document.getElementById("link1").className = 'nav-link active';
           } else if (page == 'allmedia') {
  		   		document.getElementById("link2").className = 'nav-link active';
           } else if (page == 'accountsettings') {
  		   		document.getElementById("link3").className = 'nav-link active';
           }

        },
      
      },



      computed: {

      	
      },


    //
    //
    // Methods

  };
  

</script>


<style type="text/css" scoped>
		
	#links {

		padding: 2px;
		cursor: pointer;
		color: white;

	}

	#links:hover {

		background-color: green;

	}


	#links > .active {

		background-color: rgb(41,129,118);

	}


</style>