const Services = {}

Services.get = {
    product: (limit = 10,current = 1,options = {keyword: '', filter:{}})=> {
    },
    cart:(limit = 10 ,current = 1)=> {},
    users:{
        auth: (token = null)=> {}
    },

}

Services.post = {
    product: {
        single: (data = {})=> {},
        images: (file = null)=> {}
    },
    cart: {
        add: (item = {})=> {},
        count:(id = null, current = 1)=> {}
    },
    users:{
        login: (data = {username:"",password:null})=> {},
        register: (data = {})=> {}
    }
}

Services.delete = {
    users: {
        account: (id)=> {}
    }
}


export  default Services
