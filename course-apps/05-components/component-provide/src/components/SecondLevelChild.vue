<template>
  <p><strong>Second level child</strong>: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Quisque egestas diam in arcu cursus. Sagittis nisl rhoncus mattis
    rhoncus. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Sed cras ornare arcu dui
    vivamus arcu felis. Lacus vestibulum sed arcu non odio euismod lacinia. Urna id volutpat lacus laoreet
    non curabitur. Quisque non tellus orci ac auctor. Malesuada nunc vel risus commodo viverra maecenas accumsan.
    Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Sed adipiscing diam donec adipiscing
    tristique risus. Sed enim ut sem viverra aliquet eget sit. Etiam dignissim diam quis enim. Condimentum
    lacinia quis vel eros. Tortor vitae purus faucibus ornare suspendisse sed. Accumsan in nisl nisi
    scelerisque eu ultrices vitae. Tellus mauris a diam maecenas sed. At auctor urna nunc id. Orci nulla
    pellentesque dignissim enim sit amet venenatis urna. Scelerisque eu ultrices vitae auctor eu augue.</p>

  <p>this name is coming from ancestor: {{myName}}</p>
</template>

<script>
export default {
  inject: ['myName']
}
</script>
