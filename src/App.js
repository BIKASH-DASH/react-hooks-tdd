import React, { useEffect, useState } from 'react'

export default function App() {
  const [profile, setProfile] = useState({
    followers:null,
    following:null,
    public_repos:null
  })
  const getProfile = async()=>{
   const response =  await fetch(`https://api.github.com/users/BIKASH-DASH`);
   const json = await response.json();
   setProfile({
    followers:json.followers,
    following:json.following,
    public_repos:json.public_repos
   })
  }
  useEffect(() => {
    getProfile();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>followers:{profile.followers}</h1>
        <h1>followers:{profile.following}</h1>
        <h1>public_repos:{profile.public_repos}</h1>
      </header>
    </div>
  )
}
