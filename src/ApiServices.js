import axios from "axios"

export const BaseUrl="http://localhost:5000/";
const Admin="admin/";
const Customer="customer/"
class ApiServices{
    AllCategory(){
        return axios.post(BaseUrl+Admin+"category/all")
    }
    AllMenu(){
        return axios.post(BaseUrl+Admin+"menu/all")
    }
    AllCustomer(){
        return axios.post(BaseUrl+Admin+"all")
    }
    AllOrder(){
        return axios.post(BaseUrl+Admin+"order/all")
    }
   
}
export default new ApiServices;