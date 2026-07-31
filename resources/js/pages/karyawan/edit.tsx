import FormPageHeader from '@/components/form/form-page-header';
import { dashboard } from '@/routes';
import karyawanRoute from '@/routes/karyawan';
import type { Karyawan } from '@/types';
import Form from './form';

Edit.layout = {
    breadcrumbs: [
        { title: 'Dashboard', href: dashboard() },
        { title: 'Karyawan', href: karyawanRoute.index() },
        { title: 'Edit Karyawan' },
    ],
};

export default function Edit({ karyawan }: { karyawan: Karyawan }) {
    return (
        <div className="space-y-6 p-4 sm:p-6">
            <FormPageHeader
                title="Edit Karyawan"
                description="Edit data Karyawan"
            />

            <Form karyawan={karyawan} />
        </div>
    );
}
