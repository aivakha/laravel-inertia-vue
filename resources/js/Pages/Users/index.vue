<template>

    <Link :href="route('users.create')"
          class="text-center w-40 py-2 px-3 mb-5 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 inline-block focus:outline-none">
        Add User
    </Link>

    <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div v-if="users.total > 0" class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase">
                                E-mail
                            </th>
                            <th scope="col" class="relative px-6 py-3"><span class="sr-only">Actions</span></th>
                        </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">

                        <tr v-for="user in users.data" v-bind:key="user.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-dm font-medium text-gray-900">
                                    {{ user.name }}
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-dm font-medium text-gray-900">
                                    {{ user.email }}
                                </div>
                            </td>

                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex justify-end gap-5">
                                <Link :href="route('users.edit', user.id)"
                                      class="text-indigo-600 hover:text-indigo-900">Edit
                                </Link>
                                <a v-on:click="destroy(user.id)" href="javascript:void(0)"
                                   class="text-red-900 hover:text-red-900 cursor-pointer">Delete</a>
                            </td>

                        </tr>

                        </tbody>
                    </table>

                    <Pagination
                        :currentPage="users.current_page"
                        :totalPages="users.total"
                        :lastPage="users.last_page"
                        :links="users.links"
                    />

                </div>

                <!--else-->
                <div v-else class="text-center font-bold text-xl">
                    Users not found
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import {Head, Link} from "@inertiajs/inertia-vue3";
import Pagination from "../../Shared/Pagination";

export default {
    components: {
        Head,
        Link,
        Pagination,
    },
    props: {
        title: String,
        users: Object,
    },
    methods: {
        destroy(id) {
            if (confirm('Are you sure?')) {
                this.$inertia.delete(this.route('users.destroy', id));
            }
        },
        debug(event) {
            console.log(event)
        }
    }
}
</script>
