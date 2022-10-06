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


  static getGridCol(cols){
    switch (cols){
      case 1:
        return "grid-cols-1"
      case 2:
        return "grid-cols-2"
      case 3:
        return "grid-cols-3"
      case 4:
        return "grid-cols-4"
      case 5:
        return "grid-cols-5"
      case 6:
        return "grid-cols-6"
      case 7:
        return "grid-cols-7"
      case 8:
        return "grid-cols-8"
      case 9:
        return "grid-cols-9"
      case 10:
        return "grid-cols-10"
      case 11:
        return "grid-cols-11"
      case 12:
        return "grid-cols-12"
      default:
        return "grid-cols-1"
    }
  }

  static getGap(gap){
    switch (gap){
      case 1:
        return "gap-1"
      case 2:
        return "gap-2"
      case 3:
        return "gap-3"
      case 4:
        return "gap-4"
      case 5:
        return "gap-5"
      case 6:
        return "gap-6"
      case 7:
        return "gap-7"
      case 8:
        return "gap-8"
      case 9:
        return "gap-9"
      case 10:
        return "gap-10"
      case 11:
        return "gap-11"
      case 12:
        return "gap-12"
      default:
        return ["gap-[",[gap,'rem'].join(""),']'].join("")
    }
  }

  static getSpan(span){
    switch (span){
      case 1:
        return "col-span-1"
      case 2:
        return "col-span-2"
      case 3:
        return "col-span-3"
      case 4:
        return "col-span-4"
      case 5:
        return "col-span-5"
      case 6:
        return "col-span-6"
      case 7:
        return "col-span-7"
      case 8:
        return "col-span-8"
      case 9:
        return "col-span-9"
      case 10:
        return "col-span-10"
      case 11:
        return "col-span-11"
      case 12:
        return "col-span-12"
      default:
        return "col-span-3"
    }
  }
}