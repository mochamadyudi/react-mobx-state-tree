export default class Utils {
  static getMaxWidth (max = 'lg'){
    switch (max){
      case "xs":
        return "max-w-[320px]"
      case "sm":
        return "max-w-[412px]"
      case "md":
        return "max-w-[768px]"
      case "lg":
        return "max-w-[990px]"
      case "xl":
        return "max-w-[1080px]"
      case "2xl":
        return "max-w-[1280px]"
      case "3xl":
        return "max-w-[1440px]"
      default:
        return "max-w-[1920px]"
    }
  }



  static menus = [
    {
      key:"home",
      path:"/",
      label:"Home",
      submenu: []
    },
    {
      key:"people",
      path:"/people",
      label:"People",
      submenu: [
        {
          key:"people-add",
          path:"/people/add",
          label:"Add",
          submenu: []
        },
        {
          key:"people-list",
          path:"/people/list",
          label:"List",
          submenu: []
        }
      ]
    },
    {
      key:"planet",
      path:"/planet",
      label:"Planet",
      submenu: [
        {
          key:"planet-add",
          path:"/planet/add",
          label:"Add",
          submenu: []
        },
        {
          key:"planet-list",
          path:"/planet/list",
          label:"List",
          submenu: []
        }
      ]
    },
    {
      key:"starship",
      path:"/starship",
      label:"Starship",
      submenu: [
        {
          key:"starship-add",
          path:"/starship/add",
          label:"Add",
          submenu: []
        },
        {
          key:"starship-list",
          path:"/starship/list",
          label:"List",
          submenu: []
        }
      ]
    },
  ]
}