import axios from 'axios';

async function getInfo(){
    try {
        const response = await axios.get('http://129.146.151.238/whatsapp_api/clientes.php?lista_clientes');
        return response.data;    
    } catch (error) {
        return [];
    }
}

export default getInfo;