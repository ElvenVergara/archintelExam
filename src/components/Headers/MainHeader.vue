<template>
  		
      <nav class="navbar navbar-expand p-0 m-0" style="background-color: rgb(0,105,92);">

                <ul class="navbar-nav me-auto px-0" style="width:50%;">
                    
                    <a data-bs-target="#sidebar" data-bs-toggle="collapse" class="btn text-decoration-none text-white d-none d-md-block d-lg-block w-10">
                      <v-app-bar-nav-icon dark></v-app-bar-nav-icon>
                    </a> 

                    <a data-bs-target="#offcanvasNavbar" data-bs-toggle="offcanvas" class="btn p-1 text-decoration-none text-white d-xs-block d-sm-block d-md-none d-lg-none mx-2">
                    <v-app-bar-nav-icon dark></v-app-bar-nav-icon>
                    </a>

                    <!-- Actual search box -->
                      <div class="form-group has-search" style="width:100%;margin-top:5px;">
                        <span class="form-control-feedback text-white"> 
                          <v-btn icon dark>
                            <v-icon>mdi-magnify</v-icon>
                          </v-btn>
                        </span>
                        <input type="text" id="searchBox" class="form-control text-white" placeholder="Search" style="background-color: rgb(41,129,118);color:white;">
                      </div>

                </ul>



                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <button class="btn text-white" id="sidebarToggle" @click="changePage('')">
                      <v-icon
                        dark
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-desktop-mac-dashboard
                      </v-icon>
                    </button>
                  </template>
                  <span>Manager Dashboard</span>
                </v-tooltip>

                  

              
                <div class="dropdown">
                  <button type="button" class="btn position-relative text-white dropdown-toggle" id="bellDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <v-btn icon dark>
                      <v-icon>mdi-bell</v-icon>
                    </v-btn>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="margin-top: 12px;margin-left: -20px;font-size: 10px;">
                      3
                    </span>
                  </button>

                  <ul class="dropdown-menu p-0" style="margin-left:-156px;width:300px;height:600px;overflow-y: auto;" aria-labelledby="dropdownMenuButton1">

                      <table class="w-100 text-dark">
                        <tbody>
                          <tr class="border">

                            <td class="p-3">

                                <b>Notifications</b>

                            </td>


                            <td class="text-end text-primary p-3">

                                <v-btn icon title="Edit Data" class="text-secondary">
                                  <v-icon>mdi-filter-menu</v-icon>
                                </v-btn>

                            </td>

                          </tr>
                        </tbody>
                      </table>


                      
                      <table class="border w-100 text-dark">
                        <tbody>

                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="primary"
                                >
                                  <v-icon dark>
                                    mdi-comment-quote-outline
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <a href="#" style="text-decoration:none;">a month ago</a>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                              <div>
                                  <v-icon class="text-primary" style="font-size:14px;">mdi-circle</v-icon>
                              </div>

                            </td>

                          </tr>






                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="red"
                                >
                                  <v-icon dark>
                                    mdi-file-excel
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <a href="#" style="text-decoration:none;">a month ago</a>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                              <div>
                                  <v-icon class="text-primary" style="font-size:14px;">mdi-circle</v-icon>
                              </div>

                            </td>

                          </tr>











                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="info"
                                >
                                  <v-icon dark>
                                    mdi-comment-text-multiple
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <span>a month ago</span>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                              

                            </td>

                          </tr>








                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="info"
                                >
                                  <v-icon dark>
                                    mdi-comment-text-multiple
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <a href="#" style="text-decoration:none;">a month ago</a>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                                <div>
                                  <v-icon class="text-primary" style="font-size:14px;">mdi-circle</v-icon>
                                </div>
                              
                            </td>

                          </tr>












                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="info"
                                >
                                  <v-icon dark>
                                    mdi-comment-text-multiple
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <span>2 months ago</span>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                             

                            </td>

                          </tr>







                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="info"
                                >
                                  <v-icon dark>
                                    mdi-comment-text-multiple
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <span>2 months ago</span>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                              
                            </td>

                          </tr>





                          <tr class="border">

                            <td class="text-center" style="width:20%;">

                              <div>
                                <v-btn
                                  class="mx-2"
                                  fab
                                  dark
                                  small
                                  color="info"
                                >
                                  <v-icon dark>
                                    mdi-comment-text-multiple
                                  </v-icon>
                                </v-btn>
                              </div>
                             
                            </td>

                            <td>

                                <p class="mt-2" style="font-size: 13px;line-height: normal;">
                                    <b>Glenn Ocay</b> posted new feedback on your submitted <b>EM Traditional Media</b> article: <b>[Spotlight] lester Bernaldez Test adasd.</b> Please acknowledge.<br>
                                    <span>2 months ago</span>
                                </p>

                            </td>


                            <td class="text-start text-primary" style="width:10%;">

                             

                            </td>

                          </tr>


                        </tbody>
                      </table>


                  </ul>
                </div>



















                <div class="dropdown">
                  <button type="button" class="btn position-relative text-white dropdown-toggle" id="bellDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <v-btn icon dark>
                      <v-icon>mdi-cog</v-icon>
                    </v-btn>
                  </button>

                  <ul class="dropdown-menu p-0" style="margin-left:-220px;width:300px;" aria-labelledby="dropdownMenuButton1">

                      <table class="w-100 text-dark">
                        <tbody>
                          <tr class="border">

                            <td class="p-3">

                                <b>Settings</b>

                            </td>
                          
                          </tr>
                        </tbody>
                      </table> 




                      <table class="w-100 text-dark">
                        <tbody>
                          <tr>
                            <td class="p-3">
                                General
                            </td>
                          </tr>
                        </tbody>
                      </table> 


                      <v-list-item>
                        <v-list-item-action>
                          <v-switch
                            v-model="message"
                            color="primary"
                          ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>
                          <p class="text-wrap">
                            <b>Push-Notification</b><br>
                            Enable/disable web push notifications.
                          </p>
                        </v-list-item-title>
                      </v-list-item>   




                      <v-list-item>
                        <v-list-item-action>
                          <v-switch
                            v-model="darkMode"
                            color="primary"
                          ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>
                          <p class="text-wrap">
                            <b>Dark Mode</b><br>
                            Enable dark mode theme (only applicable to internal webpages).
                          </p>
                        </v-list-item-title>
                      </v-list-item>                




                      <table class="w-100 text-dark">
                        <tbody>
                          <tr>
                            <td class="p-3">
                                Writer/Editor
                            </td>
                          </tr>
                        </tbody>
                      </table> 


                      <v-list-item>
                        <v-list-item-action>
                          <v-switch
                            v-model="message"
                            color="primary"
                          ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>
                          <p class="text-wrap">
                            <b>Auto-Save Draft</b><br>
                            (Experimental) Enable autosaving of draft
                          </p>
                        </v-list-item-title>
                      </v-list-item>   

                  </ul>
                </div>





                <div class="dropdown">
                  <button type="button" class="btn position-relative text-white dropdown-toggle" id="bellDropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                    <v-btn icon dark>
                      <v-icon>mdi-history</v-icon>
                    </v-btn>
                  </button>

                  <ul class="dropdown-menu p-0" style="margin-left:-188px;width:250px;" aria-labelledby="dropdownMenuButton1">

                      <table class="w-100 text-dark">
                        <tbody>
                          <tr class="border">

                            <td class="p-3">

                                <b>Version Logs</b>

                            </td>
                          
                          </tr>
                        </tbody>
                      </table> 



                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0 text-primary">
                              
                              <div class="row m-0">
                                  
                                  <div class="col-2 p-0">
                                      <v-rating
                                        empty-icon="mdi-star-outline"
                                        full-icon="mdi-star"
                                        half-icon="mdi-star-half-full"
                                        length="1"
                                        size="20"
                                        background-color="orange lighten-3"
                                            color="orange"
                                        value="1"
                                      ></v-rating>
                                  </div>

                                  <div class="col">
                                      <b>4.4.0</b><br>
                                      <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                                  </div>

                              </div>


                              <template v-slot:actions>
                                <v-icon color="primary">
                                  $expand
                                </v-icon>
                              </template>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>



                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>










                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>







                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>







                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>






                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>






                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>






                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>






                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>







                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>








                      <v-expansion-panels>
                        <v-expansion-panel>

                          <v-expansion-panel-header class="p-0">
                              
                              <p class="ml-3 mt-3">
                                <b>4.4.0</b><br>
                                <span style="font-size:12px;color:black;">Aug 27, 2021</span>
                              </p>

                          </v-expansion-panel-header>


                          <v-expansion-panel-content class="border p-2">
                            <p style="font-size:14px;">The quick brown fox jumps over the lazy dog.</p>
                          </v-expansion-panel-content>

                        </v-expansion-panel>
                      </v-expansion-panels>
                     
                  </ul>
                </div>


            


      </nav>


</template>
  


<script type="text/javascript">

  
  export default {

    data(){

      return{

          sidebarStatus: true,
          darkMode: false,
      }   


    },

    mounted(){


    },


    // Methods
    // 
    // 
      
      methods:{

          changePage(page){
             this.$router.push('/'+page);
          },

      }


    //
    //
    // Methods

  };
  

</script>





<style type="text/css" scope>

    .has-search .form-control {
    padding-left: 2.375rem;
    }

    .has-search .form-control-feedback {
        position: absolute;
        z-index: 2;
        display: block;
        width: 2.375rem;
        height: 2.375rem;
        line-height: 2.375rem;
        text-align: center;
        pointer-events: none;
        color: #aaa;
    }


    #bellDropdown::after{
        content: none;
    }

    #sidebar-nav {
        width: 250px;
    }

    #offcanvasNavbar {
        width: 250px;
    }

    #searchBox::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 1; /* Firefox */
    }


    @media only screen and (max-width: 760px) {
      #sidebar{
        display: none;
      }
    }


    #clicked {
      background-color: rgb(41,129,118);    
    }


    .nav-tabs .nav-item .nav-link {
      background-color: white;
      color: black;
    }

    .nav-tabs .nav-item .nav-link.active {
      color: #0080FF;
    }

    .tab-content {
      border: 1px solid #dee2e6;
      border-top: transparent;
      padding: 15px;
    }

    .tab-content .tab-pane {
      background-color: #FFF;
      color: #0080FF;
      min-height: 200px;
      height: auto;
    }


</style>