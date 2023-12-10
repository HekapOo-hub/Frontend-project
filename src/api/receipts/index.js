import storage from "../index";

const RECEIPTS_STORAGE_KEY = "todos";

export const getReceipts = async () => {
    const Receipts = await storage.getItem(RECEIPTS_STORAGE_KEY);

    return Receipts || [];
};

export const addReceipt = async (text, firstImagePath,secondImagePath) => {
    const receipts = (await storage.getItem(RECEIPTS_STORAGE_KEY)) || [];

    receipts.push({ id: `${Date.now()}`, text,firstImagePath,secondImagePath, isReverse: false });

    return storage.setItem(RECEIPTS_STORAGE_KEY, receipts);
};

export const removeReceipt = async (id) => {
    const receipts = await storage.getItem(RECEIPTS_STORAGE_KEY);

    return storage.setItem(
        RECEIPTS_STORAGE_KEY,
        receipts.filter((receipt) => receipt.id !== id),
    );
};

export const updateReceipt = async (receipt) => {
    const receipts = (await storage.getItem(RECEIPTS_STORAGE_KEY)) || [];

    receipts.splice(
        receipts.findIndex((c) => c.id === receipt.id),
        1,
        receipt,
    );

    return storage.setItem(RECEIPTS_STORAGE_KEY, receipts);
};