export default {
    setBreadCrumb({state}, opt) {
        state.title = opt.title
        state.breadcrumb = opt.breadcrumb
    }
}