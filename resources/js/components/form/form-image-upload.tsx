import { Upload, XIcon } from 'lucide-react';
import { FieldLabel } from '../ui/field';

type FormImageUploadProps = {
    preview: string | null;
    onRemove: () => void;
    htmlFor: string;
    error?: string | undefined;
};

export default function FormImageUpload({
    preview,
    onRemove,
    htmlFor,
    error,
}: FormImageUploadProps) {
    return (
        <>
            {preview ? (
                <div className="group relative w-full max-w-sm">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300">
                        <img
                            src={preview}
                            alt="Preview Cover"
                            className="w-full transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    <button
                        onClick={onRemove}
                        type="button"
                        className="absolute -top-3 -right-3 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/95 text-rose-500 shadow-lg backdrop-blur transition hover:scale-110 hover:bg-rose-500 hover:text-white"
                    >
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>
            ) : (
                <FieldLabel
                    htmlFor={htmlFor}
                    className={`flex h-36 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-2 text-center transition-colors duration-300 hover:bg-slate-50 ${error ? 'border-rose-600' : 'border-slate-200'}`}
                >
                    <Upload
                        className={`mb-3 h-6 w-6 ${error ? 'text-rose-600' : 'text-slate-400'}`}
                    />

                    <p
                        className={`text-sm ${error ? 'text-rose-600' : 'text-slate-600'}`}
                    >
                        Klik untuk upload cover buku
                    </p>

                    <p
                        className={`text-xs ${error ? 'text-rose-400' : 'text-slate-400'}`}
                    >
                        PNG, JPG, JPEG maksimal 2MB
                    </p>
                </FieldLabel>
            )}
        </>
    );
}
