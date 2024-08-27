"use client";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";

type DocumentPageProps = {
  params: {
    documentId: Id<"documents">;
  };
};

const DocumentPage = ({ params }: DocumentPageProps) => {
  const document = useQuery(api.documents.getDocument, {
    documentId: params.documentId,
  });
  if (!document) {
    return <div>You don&apos;t have access to view this Document</div>;
  }
  return (
    <main className="sm:p-24 p-8 space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <h1 className="font-bold text-4xl">{document?.title}</h1>
      </div>
      <div className="flex gap-12">
        <div className="bg-gray-900 p-4 rounded flex-1 h-[500px]">
          {document?.documentUrl && <iframe className="w-full h-full" src={document.documentUrl} />}
        </div>
        <div className="w-[400px] bg-gray-900 "></div>
      </div>
    </main>
  );
};

export default DocumentPage;
