"use client";

import React, { useState, useEffect } from "react";
import { CodeEditor } from "@/components/CodeEditor/CodeEditor";
import styles from "./Editor.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function HomePage() {
    const [code, setCode] = useState(`<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: sans-serif;
        background-color: #f0f0f0;
        padding: 20px;
      }
      h1 {
        color: #333;
      }
    </style>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>HTML + CSS + JS Editor</p>

    <script>
      console.log("Hello, from console!");
    </script>
  </body>
</html>`);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const iframe = document.getElementById("preview");
            if (iframe) {
                const doc = iframe.contentDocument || iframe.contentWindow.document;
                doc.open();
                doc.write(code);
                doc.close();
            }
        }, 250);

        return () => clearTimeout(timeout);
    }, [code]);

    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.editorPane}>
                <CodeEditor initialDoc={code} onChange={setCode} />
            </div>
            <div className={styles.previewPane}>
                <iframe id="preview" className={styles.iframe} title="Live Preview" />
            </div>
        </div>
    );
}
