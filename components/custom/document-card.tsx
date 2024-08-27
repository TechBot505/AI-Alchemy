import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Doc } from "@/convex/_generated/dataModel";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import Link from "next/link";

const DocumentCard = ({ document }: { document: Doc<"documents"> }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{document.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Link href={`documents/${document._id}`}>
          <Button className="flex gap-2 items-center">
            <Eye size={20} />
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DocumentCard;
