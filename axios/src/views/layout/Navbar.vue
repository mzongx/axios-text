<template>
    <el-menu class="navbar" mode="horizontal">
        ddd
    </el-menu>
</template>

<script>
    // import { mapGetters } from 'vuex'
    // import Levelbar from './Levelbar';
    // import Hamburger from 'components/Hamburger';
    // import ErrLog from 'components/ErrLog';
    // import errLogStore from 'store/errLog';

    export default {
      // components: {
      //   Levelbar,
      //   Hamburger,
      //   ErrLog
      // },
      // data() {
      //   return {
      //     log: errLogStore.state.errLog
      //   }
      // },
      // computed: {
      //   ...mapGetters([
      //     'sidebar',
      //     'name',
      //     'avatar'
      //   ])
      // },
      // methods: {
      //   toggleSideBar() {
      //     this.$store.dispatch('ToggleSideBar')
      //   },
      //   logout() {
      //     this.$store.dispatch('LogOut').then(() => {
      //       this.$router.push({ path: '/login' })
      //     });
      //   }
      // }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .navbar {
        height: 50px;
        line-height: 50px;
        border-radius: 0px !important;
        .hamburger-container {
            line-height: 58px;
            height: 50px;
            float: left;
            padding: 0 10px;
        }
        .errLog-container {
            display: inline-block;
            position: absolute;
            right: 150px;
        }
        .avatar-container {
            height: 50px;
            display: inline-block;
            position: absolute;
            right: 35px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top:5px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
    }
</style>



