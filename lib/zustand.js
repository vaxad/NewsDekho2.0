import {create} from 'zustand'

const store=create((set)=>({
    url:'https://gnews-api.onrender.com',
    topic: 'india',
    search: '',
    setTopic : (item) => set((state)=>({topic:item,search:''})),
    setSearch : (item) => set((state)=>({search:item}))
}))

export default store