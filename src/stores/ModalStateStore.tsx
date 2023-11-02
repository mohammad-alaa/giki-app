import { atom, selector } from "recoil";

export interface Interest {
    id: number;
    name: string
    image: string;
    selected: boolean
}

export interface InfoForm {
    name: string;
    language: string;
    country: string;
    interests: Interest[];
}

export const showModal = atom({
    key: 'ShowModal',
    default: false
})

export const showSuccessModal = atom({
    key: 'ShowSuccessModal',
    default: false,
})

export const formStepState = atom({
    key: 'FormStepState',
    default: 1
})

export const modalFormState = atom<InfoForm>({
    key: 'ModalFormState',
    default: {
        name: 'Alice',
        language: 'en',
        country: 'it',
        interests: [
            { id: 1, name: 'Innovation', image: '/7.jpeg', selected: false },
            { id: 2, name: 'Medicine', image: '/1.jpeg', selected: false },
            { id: 3, name: 'Education', image: '/8.jpeg', selected: false },
            { id: 4, name: 'Pharmtech', image: '/4.jpeg', selected: false },
            { id: 5, name: 'Research', image: '/5.jpeg', selected: false },
            { id: 6, name: 'Technology', image: '/3.jpeg', selected: false },
            { id: 7, name: 'Telemedicene', image: '/6.jpeg', selected: false },
            { id: 8, name: 'Lorem Ipsum', image: '/2.jpeg', selected: false },
        ],
    }
})

export const isModalFormValid = selector({
    key: 'IsModalFormValid',
    get: ({ get }) => {
        const form = get(modalFormState);
        const selectedItemsCount = form.interests.filter(x => x.selected).length;
        if (form.name && form.language && form.country && selectedItemsCount >= 3) return true;
        return false;
    }
})