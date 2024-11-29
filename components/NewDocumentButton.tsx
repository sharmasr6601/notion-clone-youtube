'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react'
import { Button } from './ui/button';
import { createNewDocument } from '@/actions/actions';


function NewDocumentButton() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleCreateNewDocument = () =>{
        startTransition(async ()=> {
            const {docId} = await createNewDocument();
            router.push (`/doc/${docId}`);
        });
    };

    return (
        <button onClick={handleCreateNewDocument} disabled={isPending}>
            {isPending?'Creating...':'New Document'}
        </button>
    );
}

export default NewDocumentButton;