'use client'

import { useState } from "react";
import TextInput from "@/components/TextInput";
import { TextReader, TextWriter } from '@/components/function';

export default function Page() {
  const [originText, setOriginText] = useState('');
  const [scriptText, setScriptText] = useState('');
  // const [resultText, setResultText] = useState('');
  
  const getResultText = () => {
    let reader = new TextReader(originText)
    let writer = new TextWriter()
    // console.log(reader)
    // console.log(reader.isEmpty())
    const writeline = (line:string) => writer.writeLine(line)
    try{
      const readline = eval(scriptText)
      while (!reader.isEmpty()) {
        reader.next(readline)
      }
    } catch (error) {
      writeline(error)
    }
    return writer.text()
  }
  // const helpText = `在最后输入readline表示返回这个值作为readline函数。`

  return (
    <main>
      <TextInput onChange={setOriginText} value={originText}></TextInput>
      <TextInput onChange={setScriptText} value={scriptText}></TextInput>
      <TextInput 
        // defaultValue={helpText}
        onChange={(s) => {}} 
        value={getResultText()} 
        rows={20}
      ></TextInput>
    </main>
  )
}
