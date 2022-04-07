<template>

	<div class="m-2 row">

		<!-- eslint-disable -->


	    <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-1">
	        
	        <div class="card">
	          <div class="card-body p-0">


	            <div class="m-3">
	              
	              <p><b>Welcome to Walbro Writer Dashboard</b><br>
	              <span style="font-size:13px;color:gray;">Data as of Oct. 9, 2021 10:00pm</span>
	              </p>

	                <div class="my-2">
	                  <v-btn
	                    color="success"
	                    dark
	                  >
	                	CREATE ARTICLE
	                  </v-btn>
	                </div>


	            </div>



	            <v-card>
	                

                  	<v-tabs
                      v-model="tabs"
                      centered
                    >
                      <v-tab>
                        TODAY(18)
                      </v-tab>

                      <v-tab>
                        ADVANCE(7)
                      </v-tab>

                      <v-tab>
                        LAST 7 DAYS(46)
                      </v-tab>

                      <v-tab>
                        SEND BACK(4)
                      </v-tab>

                    </v-tabs>


	                <v-tabs-items v-model="tabs">
	                  <v-tab-item>
	                    <v-card flat>
	                      	
	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr>
	                      	      <td colspan="3" class="text-center bg-primary text-white">
	                      	          <b>Customers</b>
	                      	      </td>
	                      	    </tr>
	                      	  </tbody>
	                      	</table>

	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr class="border">

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Deeside Golf Club bolster Toro fleet</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>



	                      	    <tr>

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Review: 2021 Harley-Davidson Sportster S</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>



	                      	  </tbody>
	                      	</table>


	                    </v-card>
	                  </v-tab-item>







	                  <v-tab-item>
	                    <v-card flat>
	                      	
	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr>
	                      	      <td colspan="3" class="text-center bg-primary text-white">
	                      	          <b>Customers</b>
	                      	      </td>
	                      	    </tr>
	                      	  </tbody>
	                      	</table>

	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr class="border">

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Deeside Golf Club bolster Toro fleet</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>



	                      	    <tr>

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Review: 2021 Harley-Davidson Sportster S</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>



	                      	    <tr>

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Review: 2021 Harley-Davidson Sportster S</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>



	                      	  </tbody>
	                      	</table>


	                    </v-card>
	                  </v-tab-item>

	                  <v-tab-item>
	                    <v-card flat>
	                      	
	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr>
	                      	      <td colspan="3" class="text-center bg-primary text-white">
	                      	          <b>Customers</b>
	                      	      </td>
	                      	    </tr>
	                      	  </tbody>
	                      	</table>

	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr class="border">

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Deeside Golf Club bolster Toro fleet</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>



	                      	  </tbody>
	                      	</table>

	                    </v-card>
	                  </v-tab-item>





	                  <v-tab-item>
	                    <v-card flat>
	                      	
	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr>
	                      	      <td colspan="3" class="text-center bg-primary text-white">
	                      	          <b>Customers</b>
	                      	      </td>
	                      	    </tr>
	                      	  </tbody>
	                      	</table>

	                      	<table class="border w-100 text-dark">
	                      	  <tbody>
	                      	    <tr class="border">

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Deeside Golf Club bolster Toro fleet</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>




	                      	    <tr class="border">

	                      	      <td class="text-center" style="width:13%;">

	                      	        <div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                      	      </td>

	                      	      <td class="pt-3">

	                      	          <b class="text-primary">Deeside Golf Club bolster Toro fleet</b>
	                      	          <br>

	                      	          <span>
	                      	              
	                      	              <v-rating
											  empty-icon="mdi-star-outline"
											  full-icon="mdi-star"
											  half-icon="mdi-star-half-full"
											  length="5"
											  size="20"
											  background-color="orange lighten-3"
					      					  color="orange"
											  value="3"
											></v-rating>
	                      	              
	                      	          </span>


	                      	          <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                      	              Created on Oct 8, 2021 2:31 PM <br>
	                      	              [0 | 0] . Source Date Oct 7, 2021 <br>
	                      	              Media Date Oct 8, 2021
	                      	          </p>

	                      	      </td>

	                      	      <td class="text-start text-primary">

	                      	        <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      	          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                      	        </svg>

	                      	      </td>

	                      	    </tr>


	                      	  </tbody>
	                      	</table>

	                    </v-card>
	                  </v-tab-item>
	                </v-tabs-items>
	              </v-card>


	            
	            







	            <table class="border w-100 text-dark">
	              <tbody>
	                <tr>
	                  <td colspan="3" class="text-center bg-primary text-white">
	                      <b>Competitors</b>
	                  </td>
	                </tr>
	              </tbody>
	            </table>


	            <table class="border w-100 text-dark">
	              <tbody>
	                <tr>
	                  <td colspan="3" class="text-center">
	                      <p class="m-3">-No Articies Available-</p>
	                  </td>
	                </tr>
	              </tbody>
	            </table>



	            <table class="border w-100 text-dark">
	              <tbody>
	                <tr>
	                  <td colspan="3" class="text-center bg-primary text-white">
	                      <b>Products</b>
	                  </td>
	                </tr>
	              </tbody>
	            </table>



	             <table class="border w-100 text-dark">
	              <tbody>
	                
	                <tr>

	                  <td class="text-center" style="width:13%;">

	                  	<div>
					                  	<v-btn icon title="Edit Data" class="text-success">
					                      <v-icon>mdi-pencil</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Add User" class="text-primary">
					                      <v-icon>mdi-account-plus</v-icon>
					                    </v-btn>
					                    </div>
					                    <div>
					                    <v-btn icon title="Delete Data" class="text-danger">
					                      <v-icon>mdi-file-excel</v-icon>
					                    </v-btn>
					                    </div>

	                  </td>


	                  <td class="pt-3">

	                      <b class="text-primary">Deeside Golf Club bolster Toro fleet</b>
	                      <br>

	                      <span>
	                          
	                          <v-rating
								  empty-icon="mdi-star-outline"
								  full-icon="mdi-star"
								  half-icon="mdi-star-half-full"
								  length="5"
								  size="20"
								  background-color="orange lighten-3"
		      					  color="orange"
								  value="3"
								></v-rating>
	                          
	                      </span>


	                      <p class="mt-2" style="font-size: 13px;line-height: normal;">
	                          Created on Oct 8, 2021 2:31 PM <br>
	                          [0 | 0] . Source Date Oct 7, 2021 <br>
	                          Media Date Oct 8, 2021
	                      </p>

	                  </td>

	                  <td class="text-start text-primary">

	                    <svg style="cursor: pointer;" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text-fill" viewBox="0 0 16 16">
	                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
	                    </svg>

	                  </td>

	                </tr>



	              </tbody>
	            </table>

	          </div>
	        </div>  

	    </div>

















	    <div class="col-md-12 col-lg-6 col-sm-12 col-xs-12 p-1">

	        <div class="card mb-2">
	          <div class="card-body pb-0">

	              <p><b>Writer Production</b></p>




	              	<v-simple-table dense>
	                  <template v-slot:default>
	                    <tbody>
	                      <tr>
		                    <td scope="col">Name</td>
		                    <td scope="col">Assigned</td>
		                    <td scope="col">Submitted</td>
		                  </tr>
	                      <tr>
		                    <td>Writer User 1</td>
		                    <td>7</td>
		                    <td>7</td>
		                  </tr>
		                  <tr>
		                    <td>Writer User 2</td>
		                    <td>3</td>
		                    <td>2</td>
		                  </tr>
	                    </tbody>
	                  </template>
	                </v-simple-table>

	          </div>
	        </div>




	        <div class="card">
	          <div class="card-body p-0">

	              <p class="m-3"><b>Article List Preview</b></p>


	              <table class="border w-100 text-dark">
	                    <tbody>
	                      <tr>
	                        <td colspan="3" class="text-center bg-primary text-white">
	                            <b>Customers</b>
	                        </td>
	                      </tr>
	                    </tbody>
	                  </table>




	              <div class="row border" style="margin:0px;">


	                   <div class="text-center m-0 col-3 p-2">

	                          <img src="@/assets/images/picture.png" style="border:solid black 1px;width:100px;height:100px;">
	                          <br>
	                          <button class="btn btn-sm rounded-pill text-white mt-2" style="font-size:11px;width:80px;background-color: rgb(76,175,80);">
	                            <b>Safe to Use</b>
	                          </button>

	                          <br>

	                          <span style="font-size:10px;">
	                            archintel
	                          </span>

	                          <br>

	                          <a href="#" style="font-size:12px;text-decoration:none;">
	                            <b>VIEW DETAILS</b>
	                          </a>

	                      </div>


	                      <div class="col-9 p-2">

	                            <p class="p-0 m-0"> 
	                              <button class="btn btn-warning btn-sm rounded-pill" style="background-color: rgb(255,213,79);font-size:11px;width:100px;">
				                      <v-icon style="font-size: 17px;">mdi-pencil</v-icon>
	                                &nbsp; <b>For Editing</b>
	                              </button>

	                              <a class="text-primary" style="text-decoration:none;">
	                                <b>&nbsp;[TEST] testing duplicate images</b>
	                              </a>
	                            </p>
	                            <p style="font-size: 13px;line-height: normal;text-align: justify;">
	                                The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the <a href="#">lazy dog.</a>
	                            </p>

	                      </div>
	                      
	                      

	              </div>





	              



	              <div class="row border" style="margin:0px;">


	                   <div class="text-center m-0 col-3 p-2">

	                          <img src="@/assets/images/picture.png" style="border:solid black 1px;width:100px;height:100px;">
	                          <br>
	                          <button class="btn btn-sm rounded-pill text-white mt-2" style="font-size:11px;width:80px;background-color: rgb(76,175,80);">
	                            <b>Safe to Use</b>
	                          </button>

	                          <br>

	                          <span style="font-size:10px;">
	                            archintel
	                          </span>

	                          <br>

	                          <a href="#" style="font-size:12px;text-decoration:none;">
	                            <b>VIEW DETAILS</b>
	                          </a>

	                      </div>


	                      <div class="col-9 p-2">

	                            <p class="p-0 m-0"> 
	                              <button class="btn btn-warning btn-sm rounded-pill" style="background-color: rgb(255,213,79);font-size:11px;width:100px;">
				                      <v-icon style="font-size: 17px;">mdi-pencil</v-icon>
	                               &nbsp; <b>For Editing</b>
	                              </button>

	                              <a class="text-primary" style="text-decoration:none;">
	                                <b>&nbsp;[TEST] testing duplicate images</b>
	                              </a>
	                            </p>
	                            <p style="font-size: 13px;line-height: normal;text-align: justify;">
	                                The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the <a href="#">lazy dog.</a>
	                            </p>

	                      </div>
	                      

	              </div>  



	              <table class="border w-100 text-dark">
	                <tbody>
	                  <tr>
	                    <td colspan="3" class="text-center bg-primary text-white">
	                        <b>Competitors</b>
	                    </td>
	                  </tr>
	                </tbody>
	              </table>


	              <table class="border w-100 text-dark">
	                <tbody>
	                  <tr>
	                    <td colspan="3" class="text-center">
	                        <p class="m-3">-No Articies Available-</p>
	                    </td>
	                  </tr>
	                </tbody>
	              </table>





	              <table class="border w-100 text-dark">
	                <tbody>
	                  <tr>
	                    <td colspan="3" class="text-center bg-primary text-white">
	                        <b>Products</b>
	                    </td>
	                  </tr>
	                </tbody>
	              </table>


	              <table class="border w-100 text-dark">
	                <tbody>
	                  <tr>
	                    <td colspan="3" class="text-center">
	                        <p class="m-3">-No Articies Available-</p>
	                    </td>
	                  </tr>
	                </tbody>
	              </table>



	          </div>
	        </div>

	    </div>
	    
	</div>

</template>


<script>
  export default {
    data () {
      return {
        tabs: null,
      }
    },
  }
</script>