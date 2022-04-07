<template>

 <div>
    
	<div class="card m-2">
	  <div class="card-body p-0">

	  		<div class="p-3 row w-100">
	              
  	      <div class="col">
  			  	<p>
  				  	<b>Walbro - Account Settings</b><br>
  				  	<span style="font-size:13px;color:gray;">Manage Account Settings for Walbro</span> 
  			  	</p>
  	      </div>
  			
  			</div>


        
          <div class="m-2 mt-0 row">

            <!-- eslint-disable -->


              <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-1">
                  
                  <div class="card">
                    <div class="card-body p-0">


                      <div class="m-3">
                        
                        <p><b>General</b></p>
                        

                      <form v-on:submit.prevent="onSubmit('saveSetting')">

                        <v-checkbox
                          v-model="requireCaption"
                          label="Require Image Caption"
                          color="primary"
                          hide-details
                          checked
                        ></v-checkbox>

                        <p style="font-size:12px;">This will require image caption line 1 upon submit for editing or publish; Unchecking will disable all image caption fields.</p>



                        <v-checkbox
                          v-if="description"
                          v-model="description"
                          label="Require Meta Description"
                          color="primary"
                          value="checked"
                          hide-details
                        ></v-checkbox>

                        <p v-if="description" style="font-size:12px;">This will require description upon submit for editing or publish; Unchecking will hide the field.</p>

                        <v-checkbox
                          v-model="check"
                          label="Show Video Text field"
                          color="primary"
                          value="primary"
                          hide-details
                        ></v-checkbox>

                        <p style="font-size:12px;">This will show video text field in the writer/editor panels.</p>

                        <v-checkbox
                          v-model="check"
                          label="Enable Video Process"
                          color="primary"
                          value="primary"
                          hide-details
                        ></v-checkbox>

                        <p style="font-size:12px;">This will show video text field in the writer/editor panels</p>




                        <div class="row">

                            <div class="col p-0">
                                
                                <p class="mx-3">Summary Word Count</p>

                                <v-text-field
                                  id="summaryMinimum"
                                  class="mx-2 text-danger"
                                  v-model="summaryMinimum"
                                  label="Minimum"
                                  outlined
                                  dense
                                  type="number"
                                  hint="Below the value will appear the count display in red text other-wise it will appear orange."
                                  persistent-hint
                                ></v-text-field>

                               
                                <v-text-field
                                  id="summaryStandard"
                                  class="mx-2"
                                  v-model="summaryStandard"
                                  label="Standard"
                                  outlined
                                  dense
                                  type="number"
                                  hint="Equal or greater than this value will appear the count display in green text."
                                  persistent-hint
                                ></v-text-field>


                                <v-text-field
                                  id="summaryMaximum"
                                  class="mx-2"
                                  v-model="summaryMaximum"
                                  label="Maximum"
                                  outlined
                                  dense
                                  type="number"
                                  hint="Greater than this value will appear the count display in red text."
                                  persistent-hint
                                ></v-text-field>

                            </div>


                            <div class="col p-0">
                              

                                <p class="mx-3">Content Word Count</p>

                                <v-text-field
                                  id="contentMinimum"
                                  class="mx-2"
                                  v-model="contentMinimum"
                                  label="Minimum"
                                  outlined
                                  dense
                                  type="number"
                                  hint="Below the value will appear the count display in red text other-wise it will appear orange."
                                  persistent-hint
                                ></v-text-field>


                                <v-text-field
                                  id="contentStandard"
                                  class="mx-2"
                                  v-model="contentStandard"
                                  label="Standard"
                                  outlined
                                  dense
                                  type="number"
                                  hint="Equal or greater than this value will appear the count display in green text."
                                  persistent-hint
                                ></v-text-field>


                                <v-text-field
                                  id="contentMaximum"
                                  class="mx-2"
                                  v-model="contentMaximum"
                                  label="Maximum"
                                  outlined
                                  dense
                                  type="number"
                                  hint="Greater than this value will appear the count display in red text."
                                  persistent-hint
                                ></v-text-field>



                            </div>

                        </div>

                        <br>
                        <v-btn block color="success" dense>
                          SAVE
                        </v-btn>

                       </form>
                      </div>

                    </div>
                  </div>
              </div>

















              <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-1">

                  <div class="card mb-2">
                    <div class="card-body pb-0">

                        <p>
                          <b>Categories</b><br>
                          <span style="font-size:13px;color:gray;">These settings are category validations on submitting an article for edit or publish.</span> 
                        </p>

                          <v-simple-table dense>
                            <template v-slot:default>
                              <tbody>
                                <tr>
                                  <th>Name</th>
                                  <th>Require Summary</th>
                                  <th>Require Content</th>
                                  <th>Require Link In Summary
                                    <v-icon color="primary" style="font-size:14px;">
                                      mdi-help-circle
                                    </v-icon>
                                  </th>
                                  <th>Require Link in Content
                                    <v-icon color="primary" style="font-size:14px;">
                                      mdi-help-circle
                                    </v-icon>
                                  </th>
                                  <th>Prevent Links In Summary
                                    <v-icon color="primary" style="font-size:14px;">
                                      mdi-help-circle
                                    </v-icon>
                                  </th>
                                  <th>Prevent Links In Content
                                    <v-icon color="primary" style="font-size:14px;">
                                      mdi-help-circle
                                    </v-icon>
                                  </th>
                                </tr>

                                <tr>
                                  <td>
                                      Customers
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="customer1"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="customer2"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="customer3"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="customer4"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="customer5"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="customer6"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                </tr>



                                <tr>
                                  <td>
                                      Competitors
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="competitor1"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="competitor2"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="competitor3"
                                        color="primary"
                                        disabled
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="competitor4"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="competitor5"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="competitor6"
                                        color="primary"
                                        disabled
                                      ></v-checkbox>
                                  </td>
                                  
                                </tr>





                                <tr>
                                  <td>
                                      Products
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="product1"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="product2"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="product3"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="product4"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="product5"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>

                                  <td>
                                      <v-checkbox
                                        v-model="product6"
                                        color="primary"
                                      ></v-checkbox>
                                  </td>
                                  
                                </tr>
                              
                              </tbody>
                            </template>
                          </v-simple-table>


                          <br><br><br><br><br><br><br><br>
                            <v-btn block color="success" dense>
                              SAVE
                            </v-btn>
                          <br>

                    </div>
                  </div>




                  



                    </div>
                  </div>

              </div>
              
          </div>


			
	  </div>
	</div>

</div>


</template>







<script>
  export default {
    data () {
      return {
      	   
         summaryMaximum: 100,
         summaryStandard: 80,
         summaryMinimum: 10,

         contentMaximum: 100,
         contentStandard: 80,
         contentMinimum: 10,

         check:'',


         requireCaption: true,
         description: true,
         customer1: true,
         customer2: true,
         customer3: false,
         customer4: false,
         customer5: false,
         customer6: false,
         competitor1: false,
         competitor2: false,
         competitor3: false,
         competitor4: true,
         competitor5: true,
         competitor6: false,
         product1: false,
         product2: true,
         product3: false,
         product4: false,
         product5: false,
         product6: false,

      }
    },

    watch: {
    	
      summaryMinimum(){

          if (this.summaryMinimum == 10) {
            document.getElementById('summaryMinimum').style.color = 'black';
          } else if (this.summaryMinimum < 10) {
            document.getElementById('summaryMinimum').style.color = 'red';
          } else if (this.summaryMinimum > 10) {
            document.getElementById('summaryMinimum').style.color = 'orange';
          }

      },

      contentMinimum(){

          if (this.contentMinimum == 10) {
            document.getElementById('contentMinimum').style.color = 'black';
          } else if (this.contentMinimum < 10) {
            document.getElementById('contentMinimum').style.color = 'red';
          } else if (this.contentMinimum > 10) {
            document.getElementById('contentMinimum').style.color = 'orange';
          }

      },


      summaryStandard(){

          if (this.summaryStandard >= 80) {
            document.getElementById('summaryStandard').style.color = 'green';
          } else {
            document.getElementById('summaryStandard').style.color = 'black';
          }

      },


      contentStandard(){

          if (this.contentStandard >= 80) {
            document.getElementById('contentStandard').style.color = 'green';
          } else {
            document.getElementById('contentStandard').style.color = 'black';
          }

      },


      summaryMaximum(){

          if (this.summaryMaximum > 100) {
            document.getElementById('summaryMaximum').style.color = 'red';
          } else {
            document.getElementById('summaryMaximum').style.color = 'black';
          }

      },


      contentMaximum(){

          if (this.contentMaximum > 100) {
            document.getElementById('contentMaximum').style.color = 'red';
          } else {
            document.getElementById('contentMaximum').style.color = 'black';
          }

      }
      
  	},



    mounted(){

        document.getElementById('summaryStandard').style.color = 'green';
        document.getElementById('contentStandard').style.color = 'green';

    },


  	methods: {
	     
        saveSetting(){



        }

	  }



  }
</script>



<style type="text/css">
    
    

</style>