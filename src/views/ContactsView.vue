

<script>
export default {
    name: 'ContactsView',
    data() {
        return {

        }
    },
    methods: {

    },
}
</script>


<template>
    <div class="container my-4">
        <h1 class="text-center mb-4">Get in Touch</h1>
        <form action="">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name"
                    aria-describedby="nameHelp">
                <div id="nameHelp" class="form-text">Please enter your full name</div>
            </div>
            <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" name="phone" placeholder="123-456-7890"
                    aria-describedby="phoneHelp">
                <div id="phoneHelp" class="form-text">Please enter your phone number</div>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="you@example.com"
                    aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">Please enter your email address</div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" name="message" rows="3"
                    placeholder="Your message..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
        </form>
    </div>
</template>
  

<style></style>