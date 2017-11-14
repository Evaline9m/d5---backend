/*import axios from 'axios'
export default {
      getSearchList(callback){
     	axios.get('./vip/list.php')
	      .then((res)=>{     
	      	console.log(res)
	       callback(res.data);
	   })  
     }
 }*/

import axios from 'axios'
export default {
      getSearchList(callback){
     	axios.get('http://10.9.164.44:3000/api/jobs/list')
	      .then((res)=>{     
	       callback(res.data);
	   })  
     }
 }
