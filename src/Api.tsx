const BASE_API = 'https://warker-api.herokuapp.com/';


export default {
    singIn: async (email:String,password:String) =>{

        const req = await fetch(`${BASE_API}/api/login`,{
            method:'POST',
            headers:{
                Accept: 'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email,password})
        });

        const json = await req.json();
        
        return json;

        
    },
    getPostos: async () =>{
        const req = await fetch(`${BASE_API}/api/cidades`);

        const json = await req.json();

        console.log(json);

        return json;

    }
}