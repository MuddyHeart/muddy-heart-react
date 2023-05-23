export const entityToBytes32 = (entity: string) => {
    return "0x" + entity.replace("0x", "").padStart(64, "0");
}