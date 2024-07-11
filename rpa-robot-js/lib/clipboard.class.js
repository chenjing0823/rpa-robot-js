
class ClipboardClass {
    constructor(providerRegistry) {
        this.providerRegistry = providerRegistry;
    }
    async setContent(text) {
        await this.providerRegistry.getClipboard().copy(text);
    }
    /**
     * {@link getContent} returns the current content of the system clipboard (limited to text)
     */
    async getContent() {
        const content = await this.providerRegistry.getClipboard().paste();
        return content;
    }
}
exports.ClipboardClass = ClipboardClass;