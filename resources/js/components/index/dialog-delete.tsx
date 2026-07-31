import { Button } from '../ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';
import { Spinner } from '../ui/spinner';

type DialogDeleteProps = {
    handleDelete: () => void;
    processing: boolean;
    openDialog: boolean;
    setOpenDialog: (openDialog: boolean) => void;
};

export default function DialogDelete({
    handleDelete,
    processing,
    openDialog,
    setOpenDialog,
}: DialogDeleteProps) {
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                    <DialogTitle>Hapus data ini?</DialogTitle>
                    <DialogDescription>
                        Data yang sudah dihapus tidak dapat dikembalikan.
                        Pastikan Anda yakin sebelum melanjutkan.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="">
                            Batal
                        </Button>
                    </DialogClose>
                    <Button
                        onClick={handleDelete}
                        disabled={processing}
                        className="bg-rose-500 text-white hover:bg-rose-600"
                    >
                        {processing ? (
                            <div className="flex items-center justify-center gap-2">
                                <Spinner />
                                Menghapus...
                            </div>
                        ) : (
                            'Ya, Hapus'
                        )}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
