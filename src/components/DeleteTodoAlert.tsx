import { toast } from "sonner";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import { Button } from "./ui/button";
import { useDeleteTodo } from "@/hooks/useTodo";

type DeleteTodoAlertProps = {
  open: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  _id: string;
};

export function DeleteTodoAlert({
  open,
  onOpenChange,
  _id,
}: DeleteTodoAlertProps) {
  const { trigger, isMutating } = useDeleteTodo();

  const handleDeleteTodo = () => {
    onOpenChange(false);
    trigger(
      { _id },
      {
        onSuccess: () => {
          toast.info("Todo has been deleted.");
        },
      }
    );
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure to delete the todo?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button variant="destructive" onClick={handleDeleteTodo}>
            Delete
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
