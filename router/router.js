function navto(path) {
    wx.navigateTo({
        url: path,
        success: (result) => {
            console.log(result);
            
        },
        fail: () => {},
        complete: () => {}
    });
      
}

module.exports = {
    navto: navto,


}