import './App.css'
import { TwitterFollowCard } from './TwitterFolllowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Hernandez',
        isFollowing: false
    },
    {
        userName: 'TMChein',
        name: 'Paquito Hdez',
        isFollowing: true
    }
]

export function App() {
    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (

                        <TwitterFollowCard
                        key={userName} 
                        userName={userName} 
                        inicialIsFollowing={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}