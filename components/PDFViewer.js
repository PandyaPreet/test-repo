"use client";

import { useMemo, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styled from "styled-components";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PDFViewer({ url, onClose }) {
  const [numPages, setNumPages] = useState(0);
  const [page, setPage] = useState(1);
  const [scale, setScale] = useState(1);

  const canPrev = page > 1;
  const canNext = page < numPages;

  const onDocumentLoadSuccess = ({ numPages: n }) => {
    setNumPages(n);
    setPage(1);
  };

  const file = useMemo(() => ({ url }), [url]);

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <Toolbar>
          <Left>
            <Btn
              onClick={() => setScale((s) => Math.max(0.5, s - 0.1))}
              title="Zoom out"
            >
              −
            </Btn>
            <Scale>{Math.round(scale * 100)}%</Scale>
            <Btn
              onClick={() => setScale((s) => Math.min(3, s + 0.1))}
              title="Zoom in"
            >
              +
            </Btn>
          </Left>
          <Center>
            <Btn disabled={!canPrev} onClick={() => setPage((p) => p - 1)}>
              <span className="full">Prev</span>
              <span className="short">‹</span>
            </Btn>
            <PageInfo>
              <span className="full">
                {page} / {numPages || "…"}
              </span>
              <span className="short">
                {page}/{numPages || "…"}
              </span>
            </PageInfo>
            <Btn disabled={!canNext} onClick={() => setPage((p) => p + 1)}>
              <span className="full">Next</span>
              <span className="short">›</span>
            </Btn>
          </Center>
          <Right>
            <a href={url} target="_blank" rel="noreferrer">
              <Btn as="span" title="Open in new tab">
                <span className="full">Open</span>
                <span className="short">⧉</span>
              </Btn>
            </a>
            <Btn onClick={onClose}>
              <span className="full">Close</span>
              <span className="short">✕</span>
            </Btn>
          </Right>
        </Toolbar>

        <ViewerArea>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<Loading>Loading PDF…</Loading>}
          >
            {numPages > 0 && (
              <Page
                pageNumber={page}
                scale={scale}
                renderAnnotationLayer
                renderTextLayer
              />
            )}
          </Document>
        </ViewerArea>
      </Modal>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 1000;
  padding: 8px;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const Modal = styled.div`
  background: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    width: min(100%, 100%);
    height: min(90vh, 100%);
    border-radius: 12px;
  }
`;

const Toolbar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 6px;
  padding: 8px;
  border-bottom: 1px solid #eee;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto 1fr;
    gap: 12px;
    padding: 10px 12px;
  }
`;

const Left = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const Center = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-self: center;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const Right = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-self: end;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

const Btn = styled.button`
  background: #f5f5f5;
  border: 1px solid #ddd;
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  font-size: 14px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  .full {
    display: none;
  }

  .short {
    display: inline;
  }

  @media (min-width: 768px) {
    padding: 6px 10px;
    border-radius: 8px;

    .full {
      display: inline;
    }

    .short {
      display: none;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Scale = styled.span`
  min-width: 40px;
  text-align: center;
  font-size: 13px;

  @media (min-width: 768px) {
    min-width: 48px;
    font-size: 14px;
  }
`;

const PageInfo = styled.span`
  min-width: 50px;
  text-align: center;
  font-size: 13px;

  .full {
    display: none;
  }

  .short {
    display: inline;
  }

  @media (min-width: 768px) {
    min-width: 60px;
    font-size: 14px;

    .full {
      display: inline;
    }

    .short {
      display: none;
    }
  }
`;

const ViewerArea = styled.div`
  flex: 1;
  overflow: auto;
  display: grid;
  place-items: center;
  background: #fafafa;
  padding: 8px;

  canvas {
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    max-width: 100%;
    width: 100% !important;
    height: auto !important;
  }

  .react-pdf__Page {
    max-width: 100%;
    width: 100%;
  }

  @media (min-width: 768px) {
    padding: 16px;
  }
`;
const Loading = styled.div`
  padding: 20px;
  font-size: 14px;
`;
