<template>

    <Link :href="route('users.index')"
          class="text-center w-40 py-2 px-3 mb-5 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 inline-block focus:outline-none">
        &larr; Back
    </Link>

    <form v-on:submit.prevent="store">
        <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
                <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6">
                        <div class="form-group mb-3">
                            <label class="block text-sm font-medium text-gray-700">Name</label>
                            <input :class="{'border-red-500': form.errors.name}" v-model="form.name" type="text"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <div v-if="form.errors.name" class="text-red-500 mt-2">{{ form.errors.name }}</div>
                        </div>

                        <div class="form-group mb-3">
                            <label class="block text-sm font-medium text-gray-700">E-mail</label>
                            <input :class="{'border-red-500': form.errors.email}" v-model="form.email" type="email"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <div v-if="form.errors.email" class="text-red-500 mt-2">{{ form.errors.email }}</div>
                        </div>

                        <div class="form-group mb-3">
                            <label class="block text-sm font-medium text-gray-700">Password</label>
                            <input :class="{'border-red-500': form.errors.password}" v-model="form.password"
                                   type="password"
                                   class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <div v-if="form.errors.password" class="text-red-500 mt-2">{{ form.errors.password }}</div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button type="submit"
                        class="text-center w-40 py-2 px-3 mb-5 bg-blue-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-blue-500/50 inline-block focus:outline-none">
                    Create
                </button>
            </div>

        </div>
    </form>

</template>

<script>
import {Head, Link, useForm} from "@inertiajs/inertia-vue3";

export default {
    components: {
        Head,
        Link,
    },
    props: {
        title: String,
    },
    setup() {
        const form = useForm({
            name: null,
            email: null,
            password: null
        });

        function store() {
            form.post(route('users.store'))
        }

        return {
            form,
            store,
        }
    },
}
</script>
