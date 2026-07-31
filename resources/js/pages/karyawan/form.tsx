import { Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import { useEffect, useState } from 'react';
import FormAction from '@/components/form/form-action';
import FormCard from '@/components/form/form-card';
import FormField from '@/components/form/form-field';
import FormInput from '@/components/form/form-input';
import FormSection from '@/components/form/form-section';
import FormSelect from '@/components/form/form-select';
import FormTextarea from '@/components/form/form-textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import karyawanRoute from '@/routes/karyawan';
import type { Karyawan } from '@/types';

type FormProps = {
    karyawan?: Karyawan;
};

export default function Form({ karyawan }: FormProps) {
    const { data, setData, post, put, processing, errors } = useForm({
        nik: karyawan?.nik ?? '',
        nama_lengkap: karyawan?.nama_lengkap ?? '',
        jenis_kelamin: karyawan?.jenis_kelamin ?? 'L',
        tempat_lahir: karyawan?.tempat_lahir ?? '',
        tanggal_lahir: karyawan?.tanggal_lahir ?? '',
        no_telepon: karyawan?.no_telepon ?? '',
        email: karyawan?.email ?? '',
        jabatan: karyawan?.jabatan ?? '',
        tanggal_masuk: karyawan?.tanggal_masuk ?? '',
        provinsi_id: karyawan?.provinsi_id ?? '',
        kabupaten_id: karyawan?.kabupaten_id ?? '',
        kecamatan_id: karyawan?.kecamatan_id ?? '',
        desa_id: karyawan?.desa_id ?? '',
        alamat_detail: karyawan?.alamat_detail ?? '',
    });

    // console.log(data);

    const [provinces, setProvinces] = useState([]);
    const [regencies, setRegencies] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [villages, setVillages] = useState([]);

    const [loadingProvinces, setLoadingProvinces] = useState(false);
    const [loadingRegencies, setLoadingRegencies] = useState(false);
    const [loadingDistricts, setLoadingDistricts] = useState(false);
    const [loadingVillages, setLoadingVillages] = useState(false);

    // get provinces
    useEffect(() => {
        const getProvinces = async () => {
            try {
                setLoadingProvinces(true);

                const response = await fetch(`/api/provinces`);
                const result = await response.json();

                setProvinces(
                    result.data.map((data: { id: number; name: string }) => ({
                        value: data.id,
                        label: data.name,
                    })),
                );
            } catch (error) {
                setProvinces([]);
                console.error(error);
            } finally {
                setLoadingProvinces(false);
            }
        };

        getProvinces();
    }, []);

    // get regencies
    useEffect(() => {
        const getRegencies = async () => {
            if (!data.provinsi_id) {
                setRegencies([]);

                return;
            }

            try {
                setLoadingRegencies(true);

                const response = await fetch(
                    `/api/regencies/${data.provinsi_id}`,
                );

                // if (!response.ok) {
                // }

                const result = await response.json();

                setRegencies(
                    result.data.map((data: { id: number; name: string }) => ({
                        value: data.id,
                        label: data.name,
                    })),
                );
            } catch (error) {
                setRegencies([]);
                console.error(error);
            } finally {
                setLoadingRegencies(false);
            }
        };

        getRegencies();
    }, [data.provinsi_id]);

    // get districts
    useEffect(() => {
        const getDistricts = async () => {
            if (!data.kabupaten_id) {
                setDistricts([]);

                return;
            }

            try {
                setLoadingDistricts(true);

                const response = await fetch(
                    `/api/districts/${data.kabupaten_id}`,
                );

                // if (!response.ok) {
                // }

                const result = await response.json();

                setDistricts(
                    result.data.map((data: { id: number; name: string }) => ({
                        value: data.id,
                        label: data.name,
                    })),
                );
            } catch (error) {
                setDistricts([]);
                console.error(error);
            } finally {
                setLoadingDistricts(false);
            }
        };

        getDistricts();
    }, [data.kabupaten_id]);

    // get villages
    useEffect(() => {
        const getVillages = async () => {
            if (!data.kecamatan_id) {
                setVillages([]);

                return;
            }

            try {
                setLoadingVillages(true);

                const response = await fetch(
                    `/api/villages/${data.kecamatan_id}`,
                );

                // if (!response.ok) {
                // }

                const result = await response.json();

                setVillages(
                    result.data.map((data: { id: number; name: string }) => ({
                        value: data.id,
                        label: data.name,
                    })),
                );
            } catch (error) {
                setVillages([]);
                console.error(error);
            } finally {
                setLoadingVillages(false);
            }
        };

        getVillages();
    }, [data.kecamatan_id]);

    const handleChangeProvinces = (value: string) => {
        setData((data) => ({
            ...data,
            provinsi_id: value,
            kabupaten_id: '',
            kecamatan_id: '',
            desa_id: '',
        }));
    };

    const handleChangeRegencies = (value: string) => {
        setData((data) => ({
            ...data,
            kabupaten_id: value,
            kecamatan_id: '',
            desa_id: '',
        }));
    };

    const handleChangeDistricts = (value: string) => {
        setData((data) => ({
            ...data,
            kecamatan_id: value,
            desa_id: '',
        }));
    };

    const handleSubmit = (e: React.SubmitEvent) => {
        e.preventDefault();

        if (karyawan) {
            put(karyawanRoute.update.url(karyawan?.id));
        } else {
            post(karyawanRoute.store.url());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <FormCard>
                {/* Informasi karyawan */}
                <FormSection
                    title="Informasi Karyawan"
                    description="Lengkapi data utama karyawan."
                >
                    <FormField label="NIK" htmlFor="nik" error={errors.nik}>
                        <FormInput
                            id="nik"
                            type="text"
                            placeholder="Masukkan nik..."
                            value={data.nik}
                            onChange={(e) => setData('nik', e.target.value)}
                            error={errors.nik}
                        />
                    </FormField>
                    <FormField
                        label="Nama Lengkap"
                        htmlFor="nama_lengkap"
                        error={errors.nama_lengkap}
                    >
                        <FormInput
                            id="nama_lengkap"
                            type="text"
                            placeholder="Masukkan nama lengkap..."
                            value={data.nama_lengkap}
                            onChange={(e) =>
                                setData('nama_lengkap', e.target.value)
                            }
                            error={errors.nama_lengkap}
                        />
                    </FormField>

                    <div className="grid grid-cols-3 gap-3">
                        <FormField
                            label="Jenis Kelamin"
                            htmlFor="jenis_kelamin"
                            error={errors.jenis_kelamin}
                        >
                            <FormSelect
                                selectLabel="jenis kelamin"
                                placeHolder="Pilih jenis kelamin"
                                value={data.jenis_kelamin}
                                onValueChange={(value) =>
                                    setData('jenis_kelamin', value as 'L' | 'P')
                                }
                                error={errors.jenis_kelamin}
                                items={[
                                    {
                                        value: 'L',
                                        label: 'Laki - laki',
                                    },
                                    {
                                        value: 'P',
                                        label: 'Perempuan',
                                    },
                                ]}
                            />
                        </FormField>
                        <FormField
                            label="Tempat Lahir"
                            htmlFor="tempat_lahir"
                            error={errors.tempat_lahir}
                        >
                            <FormInput
                                id="tempat_lahir"
                                type="text"
                                placeholder="Masukkan tempat lahir..."
                                value={data.tempat_lahir}
                                onChange={(e) =>
                                    setData('tempat_lahir', e.target.value)
                                }
                                error={errors.tempat_lahir}
                            />
                        </FormField>
                        <FormField
                            label="Tanggal Lahir"
                            htmlFor="tanggal_lahir"
                            error={errors.tanggal_lahir}
                        >
                            <FormInput
                                id="tanggal_lahir"
                                type="date"
                                placeholder="Masukkan tanggal lahir..."
                                value={data.tanggal_lahir}
                                onChange={(e) =>
                                    setData('tanggal_lahir', e.target.value)
                                }
                                error={errors.tanggal_lahir}
                            />
                        </FormField>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            label="Nomor Telepon"
                            htmlFor="no_telepon"
                            error={errors.no_telepon}
                        >
                            <FormInput
                                id="no_telepon"
                                type="tel"
                                placeholder="08xxxxxxxxxx"
                                value={data.no_telepon}
                                onChange={(e) =>
                                    setData('no_telepon', e.target.value)
                                }
                                error={errors.no_telepon}
                            />
                        </FormField>

                        <FormField
                            label="Email"
                            htmlFor="email"
                            error={errors.email}
                        >
                            <FormInput
                                id="email"
                                type="email"
                                placeholder="nama@gmail.com"
                                value={data.email}
                                onChange={(e) =>
                                    setData('email', e.target.value)
                                }
                                error={errors.email}
                            />
                        </FormField>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            label="Jabatan"
                            htmlFor="jabatan"
                            error={errors.jabatan}
                        >
                            <FormInput
                                id="jabatan"
                                type="text"
                                placeholder="Masukkan jabatan..."
                                value={data.jabatan}
                                onChange={(e) =>
                                    setData('jabatan', e.target.value)
                                }
                                error={errors.jabatan}
                            />
                        </FormField>

                        <FormField
                            label="Tanggal Masuk"
                            htmlFor="tanggal_masuk"
                            error={errors.tanggal_masuk}
                        >
                            <FormInput
                                id="tanggal_masuk"
                                type="date"
                                value={data.tanggal_masuk}
                                onChange={(e) =>
                                    setData('tanggal_masuk', e.target.value)
                                }
                                error={errors.tanggal_masuk}
                            />
                        </FormField>
                    </div>
                </FormSection>

                <Separator />

                {/* Detail alamat karyawan */}
                <FormSection
                    title="Alamat"
                    description="Lengkapi data alamat karyawan."
                >
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            label="Provinsi"
                            htmlFor="provinsi_id"
                            error={errors.provinsi_id}
                        >
                            <FormSelect
                                selectLabel="PROVINSI"
                                placeHolder="Pilih provinsi"
                                value={data.provinsi_id}
                                onValueChange={handleChangeProvinces}
                                error={errors.provinsi_id}
                                items={provinces}
                                disabled={
                                    loadingProvinces || provinces.length == 0
                                }
                            />
                        </FormField>
                        <FormField
                            label="Kapupaten/Kota"
                            htmlFor="kabupaten_id"
                            error={errors.kabupaten_id}
                        >
                            <FormSelect
                                selectLabel="KABUPATEN/KOTA"
                                placeHolder="Pilih kabupaten/kota"
                                value={data.kabupaten_id}
                                onValueChange={handleChangeRegencies}
                                error={errors.kabupaten_id}
                                items={regencies}
                                disabled={
                                    loadingRegencies || regencies.length == 0
                                }
                            />
                        </FormField>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            label="Kecamatan"
                            htmlFor="kecamatan_id"
                            error={errors.kecamatan_id}
                        >
                            <FormSelect
                                selectLabel="KECAMATAN"
                                placeHolder="Pilih kecamatan"
                                value={data.kecamatan_id}
                                onValueChange={handleChangeDistricts}
                                error={errors.kecamatan_id}
                                items={districts}
                                disabled={
                                    loadingDistricts || districts.length == 0
                                }
                            />
                        </FormField>
                        <FormField
                            label="Desa/Kelurahan"
                            htmlFor="desa_id"
                            error={errors.desa_id}
                        >
                            <FormSelect
                                selectLabel="Desa/Kelurahan"
                                placeHolder="Pilih desa/kelurahan"
                                value={data.desa_id}
                                onValueChange={(value) =>
                                    setData('desa_id', value)
                                }
                                error={errors.desa_id}
                                items={villages}
                                disabled={
                                    loadingVillages || villages.length == 0
                                }
                            />
                        </FormField>
                    </div>

                    <FormField
                        label="Alamat Detail"
                        htmlFor="alamat_detail"
                        error={errors.alamat_detail}
                    >
                        <FormTextarea
                            value={data.alamat_detail}
                            onChange={(e) =>
                                setData('alamat_detail', e.target.value)
                            }
                            placeHolder="Masukkan alamat detail..."
                            error={errors.alamat_detail}
                        />
                    </FormField>
                </FormSection>

                <FormAction>
                    <Button
                        asChild
                        variant="outline"
                        className="h-12 w-full px-6 font-semibold sm:w-auto"
                    >
                        <Link href={karyawanRoute.index.url()}>
                            <ArrowLeft />
                            Batal
                        </Link>
                    </Button>

                    <Button
                        type="submit"
                        variant={`submit`}
                        // disabled={}
                        className="h-12 w-full px-6 font-semibold sm:w-auto"
                    >
                        {processing ? <Spinner /> : <Save />}
                        Simpan
                    </Button>
                </FormAction>
            </FormCard>
        </form>
    );
}
