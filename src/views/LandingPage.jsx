import { useState, useRef } from 'react'
import './LandingPage.css'
import Step from '../components/Step'
import CreatableSelect from 'react-select/creatable'
import { Editor } from '@tinymce/tinymce-react'

const restrictions = [
  { value: 'egg', label: 'egg', color: 'black' },
  { value: 'dairy', label: 'dairy', color: 'black' },

];

function LandingPage() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className='landing-page-background'>
      <div className='landing-page'>

        <div className='landing-page-left'>
          <p className='let-them-cook-title'>Let Them Cook</p>
          <h1>Customized Recipes For Your Dietary Restrictions</h1>
          <p>
            Cooking for someone with dietary restrctions?
            <br></br> <br></br> First, select the ingredients you would like to avoid. Then, our state-of-the art AI will consult its vast knowledge base to pick the tastiest replacements for your allergies!
          </p>

          <Step stepNumber={1} stepText={'Select the ingredients you want to avoid'} />
          <CreatableSelect isMulti options={restrictions} />
          <p className='select-instructions'>Don’t see your specific restriction? Feel free to add your own to the list!</p>
        </div>

        <div className='landing-page-right'>
          <Step stepNumber={2} stepText={'Copy and paste your recipe'} />
          <Editor
            apiKey='qjo9ralclug0yalgrt7h00gv6obgyva2a2qdge2bfishns3b'
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              menubar: false,
              statusbar: false,
              toolbar: false
            }}
            initialValue="Recipe goes here..."
          />
          <div className='submit-container'>
            <Step stepNumber={3} stepText={'Hit the button to get your new recipe!'} />
            <button className='btn-grad' onClick={log}>
              Let Them Cook!
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage
