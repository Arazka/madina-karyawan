import { Link, useForm } from '@inertiajs/react';
import { Eye, Pencil, Search, SlidersHorizontal, Trash2 } from 'lucide-react';
import { useState } from 'react';
import DialogDelete from '@/components/index/dialog-delete';
import EmptyData from '@/components/index/empty-data';
import IndexHeader from '@/components/index/index-header';
import IndexHeaderLayout from '@/components/index/index-header-layout';
import IndexLayout from '@/components/index/index-layout';
import IndexPagination from '@/components/index/index-pagination';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { dashboard } from '@/routes';
import karyawanRoute from '@/routes/karyawan';
import type { Filter, Karyawan, PaginationLinkProps } from '@/types';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

type Props = {
    karyawans: {
        data: Karyawan[];
        from: number;
        to: number;
        total: number;
        last_page: number;
        links: PaginationLinkProps[];
        current_page: number;
        per_page: number;
    };
    filter: Filter;
};

Index.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'karyawan', href: karyawanRoute.index() },
    ],
};

export default function Index({ karyawans }: Props) {
    const { delete: destroy, processing } = useForm();
    const [openDialod, setOpenDialog] = useState<boolean>(false);
    const [selectedId, setSelectedId] = useState<number>(0);
    // console.log(karyawans);

    const openDialogDelete = (selectedId: number) => {
        setOpenDialog(true);
        setSelectedId(selectedId);
    };

    const handleDelete = () => {
        destroy(karyawanRoute.destroy.url(selectedId), {
            forceFormData: true,
        });
        setOpenDialog(false);
    };

    return (
        <IndexLayout>
            <IndexHeaderLayout>
                <IndexHeader
                    entity="karyawan"
                    createUrl={karyawanRoute.create.url()}
                    dataLenght={karyawans.data.length}
                />

                <Separator />

                <div className="flex items-center justify-between gap-3">
                    <div className="relative w-full max-w-xl">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            type="search"
                            // value={search}
                            placeholder={`Search...`}
                            // onChange={(e) => onSearchChange?.(e.target.value)}
                            className="rounded-xl bg-background pl-10"
                        />
                    </div>

                    <Button
                        variant="outline"
                        // onClick={onFilterClick}
                        // size={`sm`}
                    >
                        <SlidersHorizontal className="h-4 w-4 sm:mr-2" />
                        <span className="hidden sm:block">Filter</span>
                    </Button>
                </div>
            </IndexHeaderLayout>

            {karyawans.data.length > 0 ? (
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No</TableHead>
                            <TableHead>NIK</TableHead>
                            <TableHead>Nama</TableHead>
                            <TableHead>Jabatan</TableHead>
                            <TableHead>Alamat</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {karyawans?.data?.map((data, index) => {
                            return (
                                <TableRow key={data.id}>
                                    <TableCell>
                                        {karyawans.from + index}
                                    </TableCell>
                                    <TableCell>{data.nik}</TableCell>
                                    <TableCell>{data.nama_lengkap}</TableCell>
                                    <TableCell>{data.jabatan}</TableCell>
                                    <TableCell className="">
                                        <div>
                                            {data.alamat_detail}, Desa{' '}
                                            {data.desa_nama},{' '}
                                            {data.kecamatan_nama},{' '}
                                            {data.kabupaten_nama},{' '}
                                            {data.provinsi_nama}
                                        </div>
                                    </TableCell>
                                    <TableCell className="space-x-2 text-right">
                                        <Button
                                            asChild
                                            size={`icon-sm`}
                                            variant={`edit`}
                                        >
                                            <Link
                                                href={`karyawan/${data.id}/edit`}
                                            >
                                                <Pencil />
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size={`icon-sm`}
                                            variant={`show`}
                                        >
                                            <Link href={`karyawan/${data.id}`}>
                                                <Eye />
                                            </Link>
                                        </Button>
                                        <Button
                                            size={`icon-sm`}
                                            variant={`delete`}
                                            onClick={() =>
                                                openDialogDelete(data.id)
                                            }
                                        >
                                            <Trash2 />
                                            {/* Hapus */}
                                        </Button>
                                        <DialogDelete
                                            handleDelete={handleDelete}
                                            processing={processing}
                                            openDialog={openDialod}
                                            setOpenDialog={setOpenDialog}
                                        />
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            ) : (
                <EmptyData
                    entity="karyawan"
                    createUrl={karyawanRoute.create.url()}
                />
            )}

            <IndexPagination pagination={karyawans} />
        </IndexLayout>
    );
}
