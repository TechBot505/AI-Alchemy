"use client";
import CreateDocumentButton from "@/components/custom/create-document-button";
import DocumentCard from "@/components/custom/document-card";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);

  return (
    <main className="sm:p-24 p-8 space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <h1 className="font-bold text-4xl">My Documents</h1>
        <CreateDocumentButton />
      </div>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
        {documents?.map((doc) => <DocumentCard key={doc._id} document={doc} />)}
      </div>
    </main>
  );
}
