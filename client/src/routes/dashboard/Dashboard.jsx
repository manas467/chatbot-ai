import React from 'react'
import "./dashboard.css"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

  
  
  const queryClient = useQueryClient()
  const navigate=useNavigate()
  const mutation = useMutation({
    mutationFn: (text)=>{
      return  fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })  
      }).then((res)=>res.json());
      
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['userChats'] })
      navigate(`/dashboard/chats/${id}`)
    },
  })

  const handleSubmit= async(e)=>{
     e.preventDefault()
     const text=e.target.text.value;
     if(!text) return ;

     mutation.mutate(text)
    
    

  }
  return (
    <div className='dashboardPage'>
      <div className='texts'>
        <div className='logo'>
          <img src='/logo.png' />
          <h1>Lama AI</h1>
        </div>
        <div className='options'>
          <div className='option'>
            <img src='/chat.png'/>
            <span>create a new chat</span>

          </div>
          <div className='option'>
            <img src='/image.png'/>
            <span>Analyse Images</span>
          </div>
          <div className='option'>
            <img src='/code.png'/>
            <span>help me with my code</span>
          </div>
        </div>
      </div>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <input type='text' name='text' placeholder='ask me anything'/>
          <button>
            <img src='/arrow.png'/>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard