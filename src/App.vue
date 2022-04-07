<template>
  <v-app>

        <div>
            <div class="row flex-nowrap p-0" style="width:100%;--bs-gutter-x: 0;">
                <div class="col-auto text-white" style="padding-right: 0px;background-color: rgb(0,105,92);">

                    <div id="sidebar" class="collapse collapse-horizontal show" style="border:solid gray 1px;height:100vh;">

                          <SideBarContent/>
                        
                    </div>

                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="background-color: rgb(41,129,118);">
                            
                          <SideBarContent/>

                    </div>

                </div>


                <div class="col p-0">
                    
                    <main class="ps-md-0 pt-0" style="background-color: rgb(238,238,238);height:100vh;">

                      <MainHeader/>

                      <router-view/>
                                
                    </main>

                </div>
                
            </div>
        </div>

  </v-app>
</template>



<script>

  import MainHeader from '@/components/Headers/MainHeader.vue';
  import SideBarContent from '@/components/Headers/SideBar.vue';

export default {

  components: {
    MainHeader,
    SideBarContent,
  },

  data: () => ({
    //
  }),
};
</script>
