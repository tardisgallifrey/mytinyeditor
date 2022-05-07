import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import FileSaver from 'file-saver';

const API_KEY = process.env.API_KEY

export default function App() {
  const editorRef = useRef(null);

  const log = () => {
    if (editorRef.current) {

      //Removed for now.  Good for testing
      //console.log(editorRef.current.getContent());

      //Code from FileSaver.  I simply plugged in my editorRef since
      //It should always return a text string.  And, I changed my type to save html
      var blob = new Blob([editorRef.current.getContent()], {type: "text/html;charset=utf-8"});
      FileSaver.saveAs(blob, "savedcontent.html");
      
    }

    
  };

  
  return (
    <div>
    <div>
      <h1>Dave's Special TinyMCE Editor</h1>
    </div>
    <div>
      <Editor onChange={null}
        apiKey={API_KEY}
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 600,
          skin: 'oxide-dark',
          content_css: 'dark',
          menubar: true,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code preview anchor codesample fullscreen',
            'insertdatetime media table paste help wordcount'
          ],
          toolbar: 'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | code preview anchor codesample | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
        }}
      />
      <button onClick={log}>Save Content</button>
    </div>
    </div>

  );
}

