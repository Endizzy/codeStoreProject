"use client";

import React, { useRef, useEffect } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { html } from "@codemirror/lang-html";
import { oneDark } from "@codemirror/theme-one-dark";
import styles from "./CodeEditor.module.css";

export const CodeEditor = ({ initialDoc, onChange }) => {
    const editorRef = useRef(null);
    const viewRef = useRef(null);

    useEffect(() => {
        if (!editorRef.current) return;

        const updateListener = EditorView.updateListener.of((v) => {
            if (v.docChanged) {
                const text = v.state.doc.toString();
                onChange?.(text);
            }
        });

        const startState = EditorState.create({
            doc: initialDoc,
            extensions: [
                keymap.of([indentWithTab, ...defaultKeymap]),
                html(),
                oneDark,
                updateListener,
                EditorView.lineWrapping,
            ],
        });

        viewRef.current = new EditorView({
            state: startState,
            parent: editorRef.current,
        });

        return () => {
            viewRef.current?.destroy();
        };
    }, []);

    return <div className={styles.editorContainer} ref={editorRef}></div>;
};
