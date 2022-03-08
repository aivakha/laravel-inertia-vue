<template>
    <div v-if="links.length > 3" class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{{ currentPage }}</span>
                    to
                    <span class="font-medium">{{ lastPage }}</span>
                    of
                    <span class="font-medium">{{ totalPages }}</span> results
                </p>
            </div>

            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">

                    <Link
                        v-for="(link, key) in links"
                        :key="key"
                        v-html="link.label"
                        :disabled="link.url === null"
                        :class="{'z-10 bg-indigo-50 border-indigo-500 text-indigo-600': link.active,'bg-gray-100': link.url === null}"
                        :href="link.url"
                        class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium" />

                </nav>
            </div>

        </div>
    </div>
</template>

<script>
import {Link} from '@inertiajs/inertia-vue3';

export default {
    components: {
        Link,
    },
    props: {
        links: Array,
        currentPage: Number,
        totalPages: Number,
        lastPage: Number,
    },
    methods: {
        debug(event) {
            console.log(event)
        }
    },
}
</script>
