<template>
  <div class="feedback bg-opacity-80 h-full pb-36">
    <div class="survey-container pt-28">
      <div class="grid justify-items-center">
        <form @submit.prevent="addComment">
          <h2 class="text-center text-5xl text-yellow-700 font-extrabold pt-24">Comments</h2>
          <div class="pb-2">
            <label class="text-lg text-yellow-800 font-semibold" for="name">Name: </label>
            <input
              class="text-black rounded-lg text-lg w-auto focus:ring-2 focus:ring-blue-600 py-0.5 pl-3 border"
              id="name"
              type="text"
              v-model="enteredName"
              placeholder="Enter your name"
              required
            />
          </div>
          <div class="pb-2">
            <h2 class="pb-1 text-lg text-yellow-800 font-semibold" for="feedback">
              How do you feel about our food?
            </h2>
            <textarea
              class="focus:outline-none text-black text-lg pl-3 pt-1 rounded-lg w-full focus:ring-2 focus:ring-blue-600 border"
              id="feedback"
              type="text"
              v-model="enteredComment"
              placeholder="Enter comment"
              required
            />
          </div>
          <div>
            <h2 class="pb-1 text-lg text-yellow-800 font-semibold" for="ratting">Rating</h2>
            <input type="radio" v-model="rating" name="rating" value="5" />
            <label class="pr-6 pl-2" for="5">5</label>
            <input type="radio" v-model="rating" name="rating" value="4" />
            <label class="pr-6 pl-2" for="4">4</label>
            <input type="radio" v-model="rating" name="rating" value="3" />
            <label class="pr-6 pl-2" for="3">3</label>
            <input type="radio" v-model="rating" name="rating" value="2" />
            <label class="pr-6 pl-2" for="2">2</label>
            <input type="radio" v-model="rating" name="rating" value="1" />
            <label class="pr-6 pl-2" for="1">1</label>
          </div>
          <div class="pt-2 pl-5 mx-48">
            <button
              class="focus:outline-none btn text-base bg-yellow-800 text-white rounded-2xl shadow px-5 py-2 my-1"
            >
              submit
            </button>
          </div>
        </form>
      </div>

      <div class="container grid grid-cols-4 gap-10 place-items-center my-6 mx-auto px-4 pt-10">
        <div class="list" v-for="result in feedbackResults" :key="result.id">
          <section class="bg-gray-200 rounded-2xl p-1">
            <div class="text-gray-900">
              <h2 class="text-center pb-2 text-yellow-800 text-lg font-extrabold">
                Comment
              </h2>
              <h3 class=""></h3>
              <p class="pb-2">
                <span class="font-semibold text-yellow-800"> Name:</span>
                {{ result.name }}<br />
                <span class="font-semibold text-yellow-800"> Comment: </span
                >{{ result.comment }}<br />
                <span class="font-semibold text-yellow-800"> Rating: </span
                >{{ result.rating }}
              </p>
              <button
                class="focus:outline-none font-semibold text-yellow-900 hover:text-white hover:bg-yellow-800 border-2 border-red-800 rounded-full w-20 h-7 mr-10"
                @click="deleteFeedback(result.id)"
              >
                delete
              </button>
              <button
                class="focus:outline-none font-semibold text-yellow-900 hover:text-white hover:bg-yellow-800 border-2 border-red-800 rounded-full w-20 h-7"
                @click="editSurvey"
              >
                edit
              </button>
            </div>

            <form @submit="editSubmit(result)" v-if="isEdit">
              <h2 class="text-yellow-900 text-center text-lg font-extrabold pb-2 py-5"> Edit Commemnt </h2>
              <label class="text-yellow-900 font-semibold" for="name">Name:</label>
              <input
                class="text-black bg-gray-200 rounded-lg text-sm w-auto border border-gray-300 focus:outline-none py-0.5 pl-4"
                id="name"
                type="text"
                v-model="oldName"
                placeholder="Enter your name"
                required
              />
              <h2 class="text-yellow-900 text-sm py-2 font-semibold" for="feedback">
                How do you feel about our food?
              </h2>
              <textarea
                class="bg-gray-200 text-black rounded-lg text-sm border border-gray-300 focus:outline-none py-0.5 pl-3 w-full"
                id="feedback"
                type="text"
                v-model="oldFeedback"
                placeholder="Enter feedback"
                required
              />
              <h2 class="text-yellow-900 font-semibold" for="ratting">Rating</h2>
              <div class="pb-6">
                <input
                  type="radio"
                  v-model="oldrating"
                  name="rating"
                  value="5"
                />
                <label class="pr-6 pl-2 font-semibold text-yellow-900" for="5"
                  >5</label
                >
                <input
                  type="radio"
                  v-model="oldrating"
                  name="rating"
                  value="4"
                />
                <label class="pr-6 pl-2 font-semibold text-yellow-900" for="4"
                  >4</label
                >
                <input
                  type="radio"
                  v-model="oldrating"
                  name="rating"
                  value="3"
                />
                <label class="pr-6 pl-2 font-semibold text-yellow-900" for="3"
                  >3</label
                >
                <input
                  type="radio"
                  v-model="oldrating"
                  name="rating"
                  value="2"
                />
                <label class="pr-6 pl-2 font-semibold text-yellow-900" for="2"
                  >2</label
                >
                <input
                  type="radio"
                  v-model="oldrating"
                  name="rating"
                  value="1"
                />
                <label class="pr-6 pl-2 font-semibold text-yellow-900" for="1">1</label>
                <button
                  class="float-right focus:outline-none btn text-sm bg-yellow-800 text-white rounded-2xl shadow px-3 py-2 my-1">
                  edit submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
    <about msg="" />
  </div>
</template>
    
    <script>
export default {
  name: "feedback",
  props: {
    msg: String,
  },

  emits: ["btn-click"],
  data() {
    return {
      enteredName: "",
      enteredComment: "",
      rating: null,
      url: "http://localhost:5000/result",
      feedbackResults: [],
      isEdit: false,
      oldName: "",
      oldFeedback: "",
      oldrating: "",
    };
  },
  methods: {
    async addComment() {
      const newFeedback = {
        name: this.enteredName,
        comment: this.enteredComment,
        rating: this.rating,
      };
      const res = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: newFeedback.name,
          comment: newFeedback.comment,
          rating: newFeedback.rating,
        }),
      });
      const data = await res.json();
      this.feedbackResults = [...this.feedbackResults, data];
      this.enteredName = "";
      this.enteredComment = "";
      this.rating = "";
    },
    async fetchFeedbackResult() {
      const res = await fetch(this.url);
      const data = await res.json();
      return data;
    },
    async deleteFeedback(id) {
      if (confirm(`Are you sure to delete ?`)) {
        const res = await fetch(`${this.url}/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.feedbackResults = this.feedbackResults.filter(
              (feedback) => feedback.id !== id
            ))
          : alert("Error to delete feedback");
      }
    },
    editSurvey() {
      this.isEdit = true;
    },
    async editSubmit(editingData) {
      const res = await fetch(`${this.url}/${editingData.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: this.oldName,
          comment: this.oldFeedback,
          rating: this.oldrating,
        }),
      });
      const data = await res.json();
      this.feedbackResults = this.feedbackResults.map((survey) =>
        survey.id === data.id
          ? {
              ...survey,
              name: data.name,
              comment: data.comment,
              rating: data.rating,
            }
          : survey
      );
      (this.isEdit = false),
        (this.oldName = ""),
        (this.oldFeedback = ""),
        (this.oldrating = null);
    },
  },
  async created() {
    this.feedbackResults = await this.fetchFeedbackResult();
  },
};
</script>

    <style scoped>
input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #d1d3d1;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #831708;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 2px solid white;
}
</style>