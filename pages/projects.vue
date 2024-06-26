<template>
  <div class="support-page">
    <HeroBannerSupport />
    <CallToAction />

    <div class="container" v-if="!loading">
      <h2>Discover our projects</h2>
      <br><br>
      <div class="resource-cards">
        <ResourceCard v-for="(resource, index) in resources" :key="index" :resource="resource" />
      </div>
      <br><br>
      <FAQAccordion />
    </div>

    <div v-else class="loading">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useProjectsStore } from '~/stores/projects';
import { usePeopleStore } from '~/stores/people';
import HeroBannerSupport from '@/components/HeroBannerSupport.vue';
import CallToAction from '@/components/CallToAction.vue';
import ResourceCard from '@/components/ResourceCard.vue';
import FAQAccordion from '@/components/FAQAccordion.vue';

export default {
  name: 'ProjectsPage',
  components: {
    HeroBannerSupport,
    CallToAction,
    ResourceCard,
    FAQAccordion,
  },
  setup() {
    const projectsStore = useProjectsStore();
    const peopleStore = usePeopleStore();
    const loading = ref(true);

    // Simulate data fetching
    onMounted(async () => {
      try {
        await projectsStore.fetchProjects(); // Replace with actual fetch function
        await peopleStore.fetchPeople(); // Replace with actual fetch function
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        loading.value = false;
      }
    });

    const resources = computed(() => projectsStore.projects.map(project => {
      const responsiblePerson = peopleStore.people.find(person => String(person.id) === String(project.responsible_person_id));
      return {
        title: project.title,
        description: project.description,
        image: project.picture_url,
        responsible_image: responsiblePerson ? responsiblePerson.picture_url : '',
        responsible: responsiblePerson ? responsiblePerson.name : 'Unknown',
        responsibleId: responsiblePerson ? responsiblePerson.id : null,
        projectLink: `/project${project.id}`
      };
    }));

    return { resources, loading };
  }
};
</script>

<style scoped>
.container {
  padding: 2rem;
}

.resource-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

h2 {
  text-align: center;
  margin-top: 4rem;
  color: #6a0dad;
  font-size: 2.5rem;
}

.loading {
  text-align: center;
  font-size: 1.5rem;
  color: #6a0dad;
  padding: 2rem;
}
</style>