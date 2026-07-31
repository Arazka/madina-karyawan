import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';
import FormCard from '@/components/form/form-card';
import FormPageHeader from '@/components/form/form-page-header';
import FormSection from '@/components/form/form-section';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { dashboard } from '@/routes';
import karyawanRoute from '@/routes/karyawan';
import type { Karyawan } from '@/types';

Show.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Karyawan', href: karyawanRoute.index() },
        { title: 'Detail Karyawan' },
    ],
};

type DetailItemProps = {
    label: string;
    value?: string | null;
};

function DetailItem({ label, value }: DetailItemProps) {
    return (
        <div className="space-y-1.5">
            <p className="text-sm text-muted-foreground">{label}</p>

            <p className="text-sm font-medium">{value || '-'}</p>
        </div>
    );
}

export default function Show({ karyawan }: { karyawan: Karyawan }) {
    const jenisKelamin =
        karyawan.jenis_kelamin === 'L' ? 'Laki-laki' : 'Perempuan';

    return (
        <div className="space-y-6 p-4 sm:p-6">
            <FormPageHeader
                title="Detail Karyawan"
                description={`Informasi lengkap karyawan ${karyawan.nama_lengkap}`}
            />

            <FormCard>
                <FormSection
                    title="Informasi Karyawan"
                    description="Informasi pribadi dan pekerjaan karyawan."
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
                        <DetailItem label="NIK" value={karyawan.nik} />

                        <DetailItem
                            label="Nama Lengkap"
                            value={karyawan.nama_lengkap}
                        />

                        <DetailItem
                            label="Jenis Kelamin"
                            value={jenisKelamin}
                        />

                        <DetailItem
                            label="Tempat Lahir"
                            value={karyawan.tempat_lahir}
                        />

                        <DetailItem
                            label="Tanggal Lahir"
                            value={karyawan.tanggal_lahir}
                        />

                        <DetailItem
                            label="No. Telepon"
                            value={karyawan.no_telepon}
                        />

                        <DetailItem label="Email" value={karyawan.email} />

                        <DetailItem label="Jabatan" value={karyawan.jabatan} />

                        <DetailItem
                            label="Tanggal Masuk"
                            value={karyawan.tanggal_masuk}
                        />
                    </div>
                </FormSection>

                <Separator />

                <FormSection
                    title="Alamat"
                    description="Informasi alamat lengkap karyawan."
                >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                        <DetailItem
                            label="Provinsi"
                            value={karyawan.provinsi_nama}
                        />

                        <DetailItem
                            label="Kabupaten/Kota"
                            value={karyawan.kabupaten_nama}
                        />

                        <DetailItem
                            label="Kecamatan"
                            value={karyawan.kecamatan_nama}
                        />

                        <DetailItem
                            label="Desa/Kelurahan"
                            value={karyawan.desa_nama}
                        />
                    </div>

                    <div className="mt-6 space-y-1.5">
                        <p className="text-sm text-muted-foreground">
                            Alamat Detail
                        </p>

                        <p className="text-sm leading-relaxed font-medium">
                            {karyawan.alamat_detail || '-'}
                        </p>
                    </div>
                </FormSection>

                <Separator />

                <div className="flex justify-end">
                    <Button
                        asChild
                        variant="outline"
                        className="h-11 w-full sm:w-auto"
                    >
                        <Link href={karyawanRoute.index.url()}>
                            <ArrowLeft />
                            Kembali
                        </Link>
                    </Button>
                </div>
            </FormCard>
        </div>
    );
}
