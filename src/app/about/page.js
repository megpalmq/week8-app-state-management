"use client";
import useAppState from "../../hooks/useAppState";
import {useState} from "react";

export default function About() {
   const appState = useAppState();
   function changeFormField(e){
    setNewPersonForm({...newPersonForm, [e.currentTarget.name]: e.currentTarget.value})
   }

  console.log(appState);

  return (
    
      <main>
        <h1>About</h1>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={newPersonForm.name} onChange={changeFormField}></input>
          </div>
          <div>
            <input type="submit" value="Add Person"/>
          </div>
        </form>
      </main>
  );
}