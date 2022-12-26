import { useState } from 'react';
import gitLogo from '../../assets/github.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import ItemRepo from '../../components/ItemRepo';
import { api } from '../../components/services/api';
import { Container } from './style';

function App() {
    const [currentRepo, setCurrentRepo] = useState('')
    const [repos, setRepos] = useState([]);

    const handleSeach = async () => {
        
        const {data} = await api.get(`repos/${currentRepo}`)

        if(data.id){

            const isExist = repos.find(repo => repo.id === data.id)

            if(!isExist){

            setRepos(prev => [...prev, data])
            setCurrentRepo('')
            return
            }
        }
        alert('Repositório não encontrado ou já existe na lista')
    }

    function handleRemoveRepo (id) {

        const newRepo = repos.filter(repo => repo.id !== id)
        // console.log(newRepo)
        setRepos(newRepo)
    }
        

    return (
    <Container>
        <img src={gitLogo} width={72} height={72} />
        <Input value={currentRepo} 
        onChange={(e) => setCurrentRepo(e.target.value)}/>
        <Button onClick={handleSeach} />
        {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />)}
    </Container>
    )
}

export default App;