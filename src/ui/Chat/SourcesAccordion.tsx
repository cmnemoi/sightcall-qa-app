import React, { useState } from "react";

export type Source = {
  content: string;
  url: string;
};

interface SourcesAccordionProps {
  sources: Source[];
}

const SourcesAccordion: React.FC<SourcesAccordionProps> = ({ sources }) => {
  const [open, setOpen] = useState(false);
  if (!sources || sources.length === 0) return null;
  return (
    <div style={{ marginTop: 8 }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          background: "none",
          border: "none",
          color: "#4f8cff",
          cursor: "pointer",
          fontWeight: 600,
          padding: 0,
          fontSize: "0.95em",
          marginBottom: 4,
        }}
        aria-expanded={open}
      >
        {open ? "Hide sources" : "Show sources"}
      </button>
      {open && (
        <ul
          style={{
            background: "#f7faff",
            borderRadius: 8,
            padding: "10px 12px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            fontSize: "0.98em",
            maxHeight: "160px",
            overflowY: "auto",
            marginBottom: 0,
          }}
        >
          {sources.map((source, index) => (
            <li key={index} style={{ marginBottom: 6 }}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#2563eb",
                  textDecoration: "underline",
                  wordBreak: "break-all",
                  fontSize: "1em",
                }}
              >
                {source.content.length > 50
                  ? source.content.substring(0, 50) + "..."
                  : source.content}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SourcesAccordion;
