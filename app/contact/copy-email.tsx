"use client";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
export function CopyEmail(){
  const [state,setState]=useState<"ready"|"copied"|"failed">("ready");
  async function copy(){
    let copied=false;
    try { if(navigator.clipboard?.writeText){await navigator.clipboard.writeText("hello@techabanca.in");copied=true;} } catch { /* Use the fallback below. */ }
    if(!copied){
      const field=document.createElement("textarea");field.value="hello@techabanca.in";field.setAttribute("readonly","");field.style.position="fixed";field.style.opacity="0";document.body.appendChild(field);field.select();
      try { copied=document.execCommand("copy"); } catch { copied=false; }
      field.remove();
    }
    setState(copied?"copied":"failed");
    if(copied) setTimeout(()=>setState("ready"),2500);
  }
  return <button type="button" className="copy-email" onClick={copy} aria-live="polite">{state==="copied"?<Check size={17}/>:<Copy size={17}/>} {state==="copied"?"Copied":state==="failed"?"Select the address above to copy":"Copy address"}</button>;
}
