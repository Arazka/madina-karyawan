import FormPageHeader from '@/components/form/form-page-header';
import { dashboard } from '@/routes';
import karyawanRoute from '@/routes/karyawan';
import Form from './form';

Create.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Karyawan', href: karyawanRoute.index() },
        { title: 'Tambah Karyawan' },
    ],
};

export default function Create() {
    return (
        <div className="space-y-6 p-4 sm:p-6">
            <FormPageHeader
                title="Tambah Karyawan"
                description="Tambah data Karyawan baru ke sistem"
            />

            <Form />
        </div>
    );
}
