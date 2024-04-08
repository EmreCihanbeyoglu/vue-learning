<template>
    <li>
        <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
        <button @click="toggleDetailsVisibility">Show / Hide details</button>
        <button @click="toggleFav">Toggle favourite</button>
        <ul v-if="isDetailsVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
        <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
    export default {
        //emits: ['toggle-fav'],
        emits: ['toggle-fav', 'delete-friend'],
        props: {
          name: String,
          id: {
            type: String,
            required: true
          },
          phoneNumber: {
            type: String,
            required: true,
          },
          emailAddress: {
            type: String,
            required: true
          },
          isFavourite: {
            type: Boolean,
            required: false,
            default: false,
          }
        },
        data: () => {
            return {
                isDetailsVisible: false
            }
        },
        methods: {
            toggleFav() {
              this.$emit('toggle-fav', this.id);
            },
            toggleDetailsVisibility() {
              this.isDetailsVisible = !this.isDetailsVisible;
            },
            deleteFriend() {
                this.$emit('delete-friend', this.id);
            }
        }
    }

</script>